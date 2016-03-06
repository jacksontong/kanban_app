import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import Editable from '../app/components/Editable.jsx';

describe('Editable', () => {
    it('renders value', () => {
        let triggered = false;
        const value = 'value';
        const onValueClick = () => triggered = true;
        const component = renderIntoDocument(
            <Editable value={value} onValueClick={onValueClick} />
        );
        const valueComponent = findRenderedDOMComponentWithClass(component, 'value');
        Simulate.click(valueComponent);

        assert.equal(valueComponent.textContent, value);
    });

    it('triggers onEdit', () => {
        let triggered = false;
        const newValue = 'value';
        const onEdit = (val) => {
            triggered = true;
            assert.equal(val, newValue);
        };
        const component = renderIntoDocument(
            <Editable editing={true} value={'value'} onEdit={onEdit} />
        );
        const input = findRenderedDOMComponentWithTag(component, 'input');
        input.value = newValue;

        Simulate.blur(input);

        assert.equal(triggered, true);
    });

    it('allows deletion', () => {
        let deleted = false;
        const onDelete = () => {
            deleted = true;
        };
        const component = renderIntoDocument(
            <Editable value={'value'} onDelete={onDelete} />
        );

        let deleteComponent = findRenderedDOMComponentWithClass(component, 'delete');
        Simulate.click(deleteComponent);

        assert.equal(deleted, true);
    });
});