import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './componentes/CounterApp';
import { CounterWithCustomHook } from './componentes/CounterWithCustomHook';
import { MultipleCustomHooks } from './componentes/examples/MultipleCustomHooks';
import { FormWithCustomHook } from './componentes/useEffect/FormWithCustomHook';
import { FocusScreen } from './componentes/useRef/FocusScreen';
import { RealExampleUseRef } from './componentes/useRef/RealExampleUseRef';
import { HooksApp } from './HooksApp';



ReactDOM.render(
<CounterApp   />
,
  document.getElementById('root')
);

