import React from 'react';

const Symbols = (props) => <ol>{props.items.map((d,i)=><li key={i} onClick={()=>props._onClick(d)}>{d}</li>)}</ol>;

export default Symbols
