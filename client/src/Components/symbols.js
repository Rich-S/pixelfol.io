import React from 'react';
import './symbols.css';

const Symbols = (props) => <ol>{props.items.map((d,i)=><li key={i}>{d}</li>)}</ol>;

export default Symbols
