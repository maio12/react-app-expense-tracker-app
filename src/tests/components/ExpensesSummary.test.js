import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expensesSumary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={245}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expensesSumary with more expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={400}/>);
    expect(wrapper).toMatchSnapshot();
});