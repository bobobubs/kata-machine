export default function two_crystal_balls(breaks: boolean[]): number {

  //set inital jump length 
  const jump_len = Math.floor(Math.sqrt(breaks.length));

  let i = jump_len;
  for (; i < breaks.length; i += jump_len){
    //if it returns true, the first crystal ball broke
    if (breaks[i]){
      break;
    }
  }


  //iterate throught the smaller subset to find the exact point it started breaking
  i -= jump_len;
  for (let j = 0; j <jump_len && i < breaks.length; ++i, ++j){
    if (breaks[i]){
      return i;
    }
  }
  
  //if it never breaks 
  return -1
}
