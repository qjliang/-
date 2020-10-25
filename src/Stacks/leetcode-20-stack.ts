// Stack<Character> stack = new Stack<>();
//         for(int i = 0 ; i < s.length() ; i ++){
//             char c = s.charAt(i);
//             if(c == '(' || c == '[' || c == '{')
//                 stack.push(c);
//             else{
//                 if(stack.isEmpty())
//                     return false;

//                 char topChar = stack.pop();
//                 if(c == ')' && topChar != '(')
//                     return false;
//                 if(c == ']' && topChar != '[')
//                     return false;
//                 if(c == '}' && topChar != '{')
//                     return false;
//             }
//         }
//         return stack.isEmpty();
const isValid = (s: string) => { 
  const stack = []
  for (let i = 0; i < s.length; i++) { 
    const c = s.charAt(i);
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else if(stack.length === 0){ 
      return false
    } else {
      const topChar = stack.pop();
      if (c === ')' && topChar !== '(') { 
        return false;
      }
      if (c === ']' && topChar !== '[') { 
        return false;
      }
      if (c === '}' && topChar !== '{') { 
        return false;
      }
    }
  }
  return stack.length === 0
}