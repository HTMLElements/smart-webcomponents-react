import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
// Registers smart-pivot-panel, the element createPivotDesigner mounts. Without it the Grid
// still pivots, but there is no designer to dock beside it.
import 'smart-webcomponents-react/pivottable';

import {
	activeBookings, bookings, buildHeatmapRules, compact, computeHeatRanges, computeKpis,
	flatColumnGroups, flatColumns, initialPivot, money, MARGIN_TARGET
} from './bookings';

export default function App() {
	const grid = useRef(null);
	const designerHost = useRef(null);
	const expandedOnLoad = useRef(false);

	const [status, setStatus] = useState('');
	const [kpis, setKpis] = useState(() => computeKpis(bookings));

	const appearance = { showRowHeader: false, allowRowToggleAnimation: false };
	const behavior = { columnResizeMode: 'growAndShrink' };
	const selection = { enabled: true, allowCellSelection: true, mode: 'extended' };
	const clipboard = { enabled: true };
	const dataExport = { fileName: 'bookings-pivot', header: true };
	const layout = { rowHeight: 32 };

	// Every pivot row carries _pivotKind and _pivotDepth, so region rows, country rows, leaves
	// and the grand total can be styled apart. onRowClass is recycle-safe, unlike setting
	// attributes during render.
	const onRowClass = (visibleIndex, data) => data && data._pivotKind
		? 'pivot-' + data._pivotKind + ' pivot-depth-' + (data._pivotDepth || 0)
		: '';

	const applyHeatmap = useCallback(() => {
		const model = grid.current.getPivotModel();

		grid.current.conditionalFormatting = buildHeatmapRules(model, computeHeatRanges(model));
	}, []);

	const refreshKpis = useCallback(() => {
		setKpis(computeKpis(activeBookings(grid.current)));
	}, []);

	useEffect(() => {
		const element = grid.current;

		// Fail loudly. If the pivot module is missing the Grid renders the flat data perfectly
		// happily, so without this the page looks fine and simply is not a pivot.
		if (typeof element.refreshPivot !== 'function') {
			setStatus('Pivot module not loaded.');
			return;
		}

		// Setting view during load may run before the Grid has rendered, so build the pivot
		// again once it has. refreshPivot is idempotent.
		element.nativeElement.whenRendered(() => {
			element.refreshPivot();

			// smart-pivot-panel is the same element smart-pivot-table docks. Created after
			// render so the host div exists and has a height to size against.
			if (!element.createPivotDesigner(designerHost.current)) {
				setStatus('smart-pivot-panel is not registered.');
			}
		});
	}, []);

	const handlePivotChange = (event) => {
		// The scale belongs to the numbers currently on screen, so it moves with them.
		applyHeatmap();

		// Expanded on load, so the report opens showing its detail rather than three region
		// rows. Deferred a frame: setPivotModel replaces the data source inside a
		// begin/endUpdate, and endUpdate schedules the render that builds the tree. Only the
		// first build expands, or the designer would undo the user's collapses each time.
		if (!expandedOnLoad.current) {
			expandedOnLoad.current = true;
			requestAnimationFrame(() => grid.current.expandAllRows());
		}

		setStatus(bookings.length.toLocaleString() + ' bookings aggregated into '
			+ event.detail.rows + ' rows and ' + event.detail.columns + ' columns.');
	};

	// The Filters tab narrows the bookings before aggregation, so the totals are recomputed
	// from what survives rather than masked.
	const handlePivotFilter = (event) => {
		const filters = event.detail.filters;

		refreshKpis();

		setStatus(filters.length === 0
			? 'Filters cleared - all ' + bookings.length.toLocaleString() + ' bookings.'
			: 'Filtered on ' + filters.map((entry) => entry.dataField + ' ' + entry.filter.toString()).join(' and ')
			+ ' - totals recomputed from the bookings that pass.');
	};

	const handleDesignerChange = (event) => {
		const detail = event.detail;

		setStatus('Rows: ' + (detail.rows.join(' > ') || 'none')
			+ '  |  Columns: ' + (detail.columns.join(' > ') || 'none')
			+ '  |  Values: ' + (detail.values.map((value) =>
				(typeof value.summary === 'function' ? 'custom' : value.summary)
				+ '(' + value.dataField + ')').join(', ') || 'none'));
	};

	const handleColumnGroupCollapse = (event) => {
		setStatus((event.detail.collapsed ? 'Collapsing' : 'Expanding')
			+ ' column group ' + event.detail.name);
	};

	// The pivot replaces columns, columnGroups and dataSource, so switching off puts the flat
	// view back rather than assuming the Grid will.
	const handlePivotMode = (event) => {
		const element = grid.current;
		const on = event.detail && event.detail.value !== undefined ? event.detail.value : true;

		if (on) {
			element.view = 'pivot';
			element.refreshPivot();
			element.expandAllRows();
			setStatus('Pivot mode on.');
			return;
		}

		// One batch: view, columns, groups and data are four separate re-renders otherwise.
		element.beginUpdate();

		try {
			element.view = 'grid';
			element.columns = flatColumns();
			element.columnGroups = flatColumnGroups();
			element.dataSource = bookings;
		}
		finally {
			element.endUpdate();
		}

		setStatus('Pivot mode off - ' + bookings.length.toLocaleString()
			+ ' bookings, one row each. The wells still work; switch back on to see the result.');
	};

	const growthDirection = kpis.growth >= 0 ? 'rising' : 'falling';

	return (
		<div>
			<div className="demo-description">
				<b>Description:</b> Two financial years of software bookings, 4,224 records across eleven
				territories, four product lines, four sales channels and three customer segments, with a
				docked <b>smart-pivot-panel</b> beside the Grid. Drag a field between the Rows / Columns /
				Values wells to re-pivot, <b>right-click</b> a field for the same moves without dragging, or
				use the panel's <b>Filters</b> tab to narrow the bookings. A filter runs before aggregation,
				so the totals are recomputed from what survives rather than masked.
				<br /><br />
				Pivot is a <i>native</i> view, so everything else keeps working: drag-select a range of
				cells, copy with <b>Ctrl+C</b>, resize and reorder columns. Row groups are ordinary tree
				rows, so the expanders come for free, and the column axis becomes collapsible banded
				headers - click a year to fold it to its total.
			</div>

			<div className="pivot-kpis">
				<div className="kpi">
					<div className="kpi-figure">{money(kpis.revenue)}</div>
					<div className="kpi-name">
						Bookings
						{kpis.filtered &&
							<em>{kpis.count.toLocaleString('en-US')} of {bookings.length.toLocaleString('en-US')}</em>}
					</div>
				</div>

				<div className="kpi">
					<div className="kpi-figure">
						{(kpis.marginRate * 100).toFixed(1)}<span className="kpi-unit">%</span>
					</div>
					<div className="kpi-name">Gross margin <em>{compact(kpis.margin)}</em></div>
					<div className={'kpi-bar' + (kpis.marginRate >= MARGIN_TARGET ? ' over' : '')}>
						<i style={{ width: Math.min(100, kpis.marginRate * 100).toFixed(1) + '%' }}></i>
						<s style={{ left: (MARGIN_TARGET * 100) + '%' }}></s>
					</div>
				</div>

				<div className="kpi">
					<div className="kpi-figure">{kpis.deals.toLocaleString('en-US')}</div>
					<div className="kpi-name">Closed deals</div>
				</div>

				<div className="kpi">
					<div className="kpi-figure">
						<span className={'kpi-' + growthDirection}>
							{kpis.growth >= 0 ? '▲' : '▼'} {Math.abs(kpis.growth * 100).toFixed(1)}
							<span className="kpi-unit">%</span>
						</span>
					</div>
					<div className="kpi-name">
						FY25 vs FY24 <em>{compact(kpis.current)} vs {compact(kpis.previous)}</em>
					</div>
				</div>

				<div className="kpi">
					<div className="kpi-figure">{money(kpis.averageDeal)}</div>
					<div className="kpi-name">Average deal</div>
				</div>
			</div>

			<div className="pivot-demo">
				<Grid
					ref={grid}
					id="grid"
					view="pivot"
					pivot={initialPivot()}
					dataSource={bookings}
					columns={flatColumns()}
					columnGroups={flatColumnGroups()}
					appearance={appearance}
					behavior={behavior}
					selection={selection}
					clipboard={clipboard}
					dataExport={dataExport}
					layout={layout}
					onRowClass={onRowClass}
					onPivotChange={handlePivotChange}
					onPivotFilter={handlePivotFilter}
					onPivotDesignerChange={handleDesignerChange}
					onColumnGroupCollapse={handleColumnGroupCollapse}
				/>

				<div className="pivot-side">
					<div className="pivot-side-header">
						<SwitchButton checked onChange={handlePivotMode}></SwitchButton>
						<span>Pivot Mode</span>
					</div>
					<div ref={designerHost} className="pivot-designer-host"></div>
				</div>
			</div>

			<div className="pivot-log">{status}</div>
		</div>
	);
}
