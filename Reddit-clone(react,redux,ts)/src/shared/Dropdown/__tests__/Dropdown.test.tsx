//если я хочу тестить что то связанное с объектом window, то мне нужно работать с jsdom. Для этого 
/**
 * @jest-environment jsdom
 */



// import React from 'react';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { shallow, configure } from 'enzyme';
// import { Dropdown } from "../Dropdown"

// configure({ adapter: new Adapter() });

// describe('Dropdown', ()=> {
//   test('should render', ()=> {
//     const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)
//     expect(wrapper).toBeDefined();
//     // console.log(wrapper.find('div.container').debug())
//     expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
//   })

//   test('should render (snapshot)', ()=> {
//     const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>)
//     expect(wrapper).toMatchSnapshot();
//   })
// })
