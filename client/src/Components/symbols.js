import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const Symbols = (props) => props.items.map((d,i)=> <Chip style={{border: "2px solid gainsboro", margin: '.5em', padding: '1em', background: "none"}} label={d} onDelete={()=>props._onClick(d)}></Chip>)

export default Symbols
