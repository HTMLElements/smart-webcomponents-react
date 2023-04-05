import { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const grid = useRef(null);
	const showBottomPager = useRef(null);
	const changePageSizeSelectorPosition = useRef(null);
	const changeNavigationButtonsPosition = useRef(null);
	const showNavigationButtonsAsLabels = useRef(null);
	const changeSummaryPosition = useRef(null);
	const showTopPager = useRef(null);
	const changeNavigationInputPosition = useRef(null);

	const paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 1
	};

	const pager = {
		visible: true,
		pageSizeSelector: {
			visible: true
		},
		pageIndexSelectors: {
			dataSource: 3
		}
	};

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 5000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			setTimeout(function () {
				resultCallbackFunction({
					dataSource: GetData(details.first, details.last)
				});
			}, 100);
		},
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	const columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName'
		},
		{
			label: 'Product',
			dataField: 'productName'
		},
		{
			label: 'Quantity',
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	const handleShowPagerSummaryChange = (е) => {

		const checked = е.detail.value;

		grid.current.pager.summary.visible = checked;

		changeSummaryPosition.current.disabled = !checked;

	}

	const handleShowPagerChange = () => {

		const isTopPagerVisible = showTopPager.current.checked;
		const isBottomPagerVisible = showBottomPager.current.checked;

		grid.current.pager.visible = true;

		if (isTopPagerVisible && isBottomPagerVisible) { grid.current.pager.position = 'both' }
		else if (isTopPagerVisible) { grid.current.pager.position = 'near' }
		else if (isBottomPagerVisible) { grid.current.pager.position = 'far' }
		else { grid.current.pager.visible = false }

	}

	const handleChangePageIndexSelectorsCountChange = (е) =>
		grid.current.pager.pageIndexSelectors.dataSource = е.detail.value ? 3 : 5

	const handleShowPageSizeSelectorChange = (е) => {

		const checked = е.detail.value;

		grid.current.pager.pageSizeSelector.visible = checked;

		changePageSizeSelectorPosition.current.disabled = !checked;

	}

	const handleChangePageSizeSelectorPositionChange = (е) =>
		grid.current.pager.pageSizeSelector.position = е.detail.value ? 'near' : 'far'

	const handleChangeSummaryPositionChange = (е) =>
		grid.current.pager.summary.position = е.detail.value ? 'near' : 'far'

	const handleChangeNavigationInputPositionChange = (е) =>
		grid.current.pager.navigationInput.position = е.detail.value ? 'near' : 'far'

	const handleChangeNavigationButtonsPositionChange = (е) =>
		grid.current.pager.navigationButtons.position = е.detail.value ? 'near' : 'far'

	const handleShowPrevNextNavigationButtonsChange = (е) => {

		grid.current.pager.navigationButtons.prevNextButtons.visible = е.detail.value;

		if (
			!grid.current.pager.navigationButtons.prevNextButtons.visible
			&& !grid.current.pager.navigationButtons.firstLastButtons.visible
		) {
			changeNavigationButtonsPosition.current.disabled = true;
			showNavigationButtonsAsLabels.current.disabled = true;
		} else {
			changeNavigationButtonsPosition.current.disabled = false;
			showNavigationButtonsAsLabels.current.disabled = false;
		}
	}

	const handleShowFirstLastNavigationButtonsChange = (е) => {

		grid.current.pager.navigationButtons.firstLastButtons.visible = е.detail.value;

		if (
			!grid.current.pager.navigationButtons.prevNextButtons.visible
			&& !grid.current.pager.navigationButtons.firstLastButtons.visible
		) {
			changeNavigationButtonsPosition.current.disabled = true;
			showNavigationButtonsAsLabels.current.disabled = true;
		} else {
			changeNavigationButtonsPosition.current.disabled = false;
			showNavigationButtonsAsLabels.current.disabled = false;
		}
	}

	const handleShowNavigationButtonsAsLabelsChange = (е) =>
		grid.current.pager.navigationButtons.labels.visible = е.detail.value

	const handleShowNavigationInputChange = (е) => {
		changeNavigationInputPosition.current.disabled = !е.detail.value;
		grid.current.pager.navigationInput.visible = е.detail.value;
	}

	const handleShowPagerIndexSelectorsChange = (е) =>
		grid.current.pager.pageIndexSelectors.visible = е.detail.value

	const handleShowPagerEllipsisChange = (е) =>
		grid.current.pager.autoEllipsis = е.detail.value ? 'both' : 'none'

	return (
		<div>
			<div className="demo-description">Paging in Smart Grid is highly customizable. Use the options on the right
				to dynamically customize the Grid pager.
			</div>
			<Grid ref={grid} id="grid"
				paging={paging}
				pager={pager}
				dataSource={dataSource}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<CheckBox id="showBottomPager" ref={showBottomPager}
						checked
						onChange={handleShowPagerChange}
					>Show Bottom Pager</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="changePageSizeSelectorPosition" ref={changePageSizeSelectorPosition}
						onChange={handleChangePageSizeSelectorPositionChange}
					>Page Size Near Position</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="changePageIndexSelectorsCount"
						checked
						onChange={handleChangePageIndexSelectorsCountChange}
					>Page Index Count to 3</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="changeNavigationButtonsPosition" ref={changeNavigationButtonsPosition}
						onChange={handleChangeNavigationButtonsPositionChange}
					>Nav Buttons Near Position</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="changeNavigationInputPosition" ref={changeNavigationInputPosition}
						disabled
						onChange={handleChangeNavigationInputPositionChange}
					>Nav Input Near Position</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="changeSummaryPosition" ref={changeSummaryPosition}
						disabled
						onChange={handleChangeSummaryPositionChange}
					>Summary Near Position</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showPagerSummary"
						onChange={handleShowPagerSummaryChange}
					>Show Pager Summary</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showTopPager" ref={showTopPager}
						onChange={handleShowPagerChange}>Show Top Pager</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showPageSizeSelector"
						checked
						onChange={handleShowPageSizeSelectorChange}
					>Show Page Size Selector</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showPrevNextNavigationButtons"
						checked
						onChange={handleShowPrevNextNavigationButtonsChange}
					>Show Prev/Next Nav Buttons</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showFirstLastNavigationButtons"
						checked
						onChange={handleShowFirstLastNavigationButtonsChange}
					>Show First/Last Nav Buttons</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showNavigationButtonsAsLabels" ref={showNavigationButtonsAsLabels}
						onChange={handleShowNavigationButtonsAsLabelsChange}
					>Show Nav Buttons as Labels</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showNavigationInput"
						onChange={handleShowNavigationInputChange}
					>Show Nav Input</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showPagerIndexSelectors"
						checked
						onChange={handleShowPagerIndexSelectorsChange}
					>Show Pager Index Selectors</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="showPagerEllipsis"
						checked
						onChange={handleShowPagerEllipsisChange}
					>Show Pager Ellipsis</CheckBox>
				</div>
			</div>
		</div>
	)
}