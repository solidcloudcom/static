import { Strategy } from 'passport';
import FBStrategy from './fbauth';
import VKStrategy from './vkauth';


const strategies: Array<Strategy> = [];

strategies.push(FBStrategy, VKStrategy);

export default strategies;
