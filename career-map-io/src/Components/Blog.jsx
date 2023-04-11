import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-violet-50'>
                <h3 className='text-5xl font-semibold'>Blog</h3>
                <div>
                    <img className='' src="/src/assets/images/Vector.png" alt="" />
                </div>
            </div>
            <div className='py-12 px-5 text-left grid gap-8'>
                <div>
                    <h3 className='text-2xl font-semibold'>a. When should you use context API?</h3>
                    <p>Context API is a new feature of React that allows one to share state across the entire app (or part of it) lightly and with ease. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>b. What is a custom hook?</h3>
                    <p>Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks start with "use".
                        <br />
                        A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. The major differences between a custom React JS hook and React JS components:
                        A custom hook does not require a specific signature.
                        A software developer can choose what argument the custom hook has and what should the argument return.
                        A custom hook always starts with the name "use".</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>c. What is useRef?</h3>
                    <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It returns a mutable object which doesn't re-render the component when it's changed. </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold'>d. What is useMemo?</h3>
                    <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies). useMemo is a React Hook that lets you cache the result of a calculation between re-renders. It is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;