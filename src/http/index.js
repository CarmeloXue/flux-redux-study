import { generate as id} from 'shortid';
const asycnAwaitTime = 500;
export const get = (url,cb)=>{
    setTimeout(()=>{
        cb(id());
    },asycnAwaitTime)
}
