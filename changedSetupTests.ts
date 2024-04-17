import { configure } from 'enzyme';
import Adapter from './changedAdapter';

configure({ adapter: new Adapter() });