import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useCallback, useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
  const chemicalElementsData = useMemo(() => [
    {
      number: 1,
      name: 'Hydrogen',
      symbol: 'H',
      weight: 1.008,
      abundance: 1400,
      originOfName: 'Greek elements hydro- and -gen, \'water-forming\''
    },
    {
      number: 2,
      name: 'Helium',
      symbol: 'He',
      weight: 4.002602,
      abundance: 0.008,
      originOfName: 'Greek hḗlios, \'sun\''
    },
    {
      number: 3,
      name: 'Lithium',
      symbol: 'Li',
      weight: 6.94,
      abundance: 20,
      originOfName: 'Greek líthos, \'stone\''
    },
    {
      number: 4,
      name: 'Beryllium',
      symbol: 'Be',
      weight: 9.0121831,
      abundance: 2.8,
      originOfName: 'Beryl, a mineral (ultimately from the name of Belur in southern India)'
    },
    {
      number: 5,
      name: 'Boron',
      symbol: 'B',
      weight: 10.81,
      abundance: 10,
      originOfName: 'Borax, a mineral (from Arabic bawraq)'
    },
    {
      number: 6,
      name: 'Carbon',
      symbol: 'C',
      weight: 12.011,
      abundance: 200,
      originOfName: 'Latin carbo, \'coal\''
    },
    {
      number: 7,
      name: 'Nitrogen',
      symbol: 'N',
      weight: 14.007,
      abundance: 19,
      originOfName: 'Greek nítron and -gen, \'niter-forming\''
    },
    {
      number: 8,
      name: 'Oxygen',
      symbol: 'O',
      weight: 15.999,
      abundance: 461000,
      originOfName: 'Greek oxy- and -gen, \'acid-forming\''
    },
    {
      number: 9,
      name: 'Fluorine',
      symbol: 'F',
      weight: 18.998403163,
      abundance: 585,
      originOfName: 'Latin fluere, \'to flow\''
    },
    {
      number: 10,
      name: 'Neon',
      symbol: 'Ne',
      weight: 20.1797,
      abundance: 0.005,
      originOfName: 'Greek néon, \'new\''
    }
  ], []);

  const columns = useMemo(() => [
    {
      label: 'No.',
      dataField: 'number',
      dataType: 'number',
      width: 50
    },
    {
      label: 'Name',
      dataField: 'name',
      dataType: 'string',
      width: 200
    },
    {
      label: 'Symbol',
      dataField: 'symbol',
      dataType: 'string',
      width: 150,
      formatFunction(settings) {
        settings.template = `<span className="badge badge-info">${settings.value}</span>`;
      }
    },
    {
      label: 'Weight',
      dataField: 'weight',
      dataType: 'number',
      width: 200
    },
    {
      label: 'Abundance',
      dataField: 'abundance',
      dataType: 'number',
      width: 200,
      formatFunction(settings) {
        const logarithmicValue = Math.log10(settings.value);
        settings.template = `<div className="progress">
              <div className="progress-bar" role="progressbar" style="width: ${(logarithmicValue / 6) * 100}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
      }
    },
    {
      label: '',
      dataField: 'originOfName',
      dataType: 'string',
      width: 50,
      formatFunction(settings) {
        settings.template = `<span className="material-icons" data-placement="right" tabindex="1" data-trigger="focus" data-toggle="popover" title="Origin of name" data-content="${settings.value}">info</span>`;
      }
    }
  ], []);

  // Script loader function
  const loadScript = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let integrity;

      if (src.includes('jquery')) {
        integrity = "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n";
        script.onload = () => loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js").then(resolve);
      }
      else if (src.includes('popper')) {
        integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo";
        script.onload = () => loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js").then(resolve);
      }
      else {
        integrity = "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6";
        script.onload = () => {
          window.$('[data-toggle="popover"]').popover({ boundary: 'window' });
          resolve();
        };
      }

      script.src = src;
      script.integrity = integrity;
      script.crossOrigin = "anonymous";

      script.onerror = () => reject(new Error(`Failed to load script ${src}`));

      document.body.appendChild(script);
    });
  }, []);

  // Handle table ready event
  const handleReady = useCallback(() => {
    loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js").catch(console.error);
  }, [loadScript]);

  useEffect(() => {
    // Cleanup popovers on unmount
    return () => {
      if (window.$) {
        window.$('[data-toggle="popover"]').popover('dispose');
      }
    };
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <div className="demo-description">This demo showcases how to integrate Bootstrap components in Table.</div>
      <Table
        id="table"
        dataSource={chemicalElementsData}
        columns={columns}
        onReady={handleReady}
      />
    </div>
  );
};

export default App;
