import React from 'react';
import StyleDropdown from '../StyleDropdown';
import { SplitButton, MenuItem } from 'react-bootstrap';

<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
</SplitButton>
/**
 * Array of types of block styles that can be made in our text editor.
 * @type {Array}
 */
const BLOCK_TYPES = [
   { label: 'H1', style: 'header-one' },
   { label: 'H2', style: 'header-two' },
   { label: 'H3', style: 'header-three' },
   { label: 'H4', style: 'header-four' },
   { label: 'H5', style: 'header-five' },
   { label: 'H6', style: 'header-six' }
];

export const BlockStyleDropdownControls = (props) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="TextEditor-controls-bar">
            <StyleDropdown
                blockTypes={BLOCK_TYPES}
                onChange={props.onChange}
            />
        </div>
  );
};
