export default function counter(state = 0,action){
        switch (action.type){
            case 'INC':{
                // saveState('mostafa',state + 1);
                return state + 1;
            }
            case 'DEC':
                return state - 1;
            default:
                return state;
        }
};