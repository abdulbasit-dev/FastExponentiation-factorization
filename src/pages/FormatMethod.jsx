import React, {useState} from 'react';

function FormatMethod() {
  const [result, setResult] = useState(null);
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  // This function finds the value of a and b
  // and returns a+b and a-b
  const fermatFactors = n => {
    // since fermat's factorization applicable
    // for odd positive integers only
    if (n <= 0) {
      console.log('[' + n + ']');
      setError('The Number Not Positve');
      return;
    }

    // check if n is a even number
    if ((n & 1) === 0) {
      console.log('[' + n / 2.0 + ',' + 2 + ']');
      return;
    }

    let a = Math.ceil(Math.sqrt(n));

    // if n is a perfect root,
    // then both its square roots are its factors
    if (a * a === n) {
      console.log('[' + a + ',' + a + ']');
      return;
    }
    let b;
    while (true) {
      const b1 = a * a - n;
      b = Math.sqrt(b1);

      if (b * b === b1) break;
      else a += 1;
    }
    console.log('[' + (a - b) + ',' + (a + b) + ']');
    setError(null);
    setResult('[' + (a - b).toFixed(2) + ',' + (a + b).toFixed(2) + ']');
    return;
  };

  const handleSubmit = e => {
    e.preventDefault();
    // fermatFactors(6557);
    fermatFactors(parseInt(data));
    setData('');
    // setResult(null);
  };

  return (
    <div className='my-10 '>
      <h1 className='text-gray-600 text-center text-4xl mb-2'>Format Method</h1>
      {error && (
        <div className='bg-red-500  text-white w-2/3 p-1 rounded-md mx-auto transition duration-200 ease-in-out'>
          {error}
        </div>
      )}

      <form
        action=''
        onSubmit={handleSubmit}
        className='flex  flex-col items-center my-6'
      >
        <div>
          <div className='flex items-center'>
            <label
              htmlFor='base'
              className='flex-1 text-left mr-4 text-md text-gray-500'
            >
              Odd Integer
            </label>
            <input
              id='base'
              placeholder='a'
              value={data}
              onChange={e => setData(e.target.value)}
              type='text'
              className='block  px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-indigo-500 w-32 h-10  focus:outline-none focus:ring'
            />
          </div>
        </div>
        <div className='flex mt-2'>
          <button
            type='submit'
            disabled={!data.length}
            className='bg-indigo-500 text-base font-medium px-6 py-2 rounded-md focus:outline-none mr-4 '
          >
            Find
          </button>
          {result && <h3 className='text-gray-600'>Result: {result}</h3>}
        </div>
      </form>
    </div>
  );
}

export default FormatMethod;
