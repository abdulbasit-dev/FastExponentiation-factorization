import React, {useState} from 'react';

function FastExponentiation() {
  const [result, setResult] = useState(null);
  const [data, setData] = useState({
    base: '',
    exponent: '',
    modulo: '',
  });

  /**
   * Fast modular exponentiation for a ^ b mod n
   * @returns {number}
   */
  var fastModularExponentiation = function (a, b, n) {
    a = a % n;
    var result = 1;
    var x = a;

    while (b > 0) {
      var leastSignificantBit = b % 2;
      b = Math.floor(b / 2);

      if (leastSignificantBit == 1) {
        result = result * x;
        result = result % n;
      }

      x = x * x;
      x = x % n;
    }
    setResult(result);
  };

  // console.log(fastModularExponentiation(12, 53, 7));
  // console.log(fastModularExponentiation(7, 12, 10));
  // console.log(fastModularExponentiation(3, 51, 13));

  const handleSubmit = e => {
    e.preventDefault();
    if (!data.base.length && !data.exponent.length && !data.modulo.length) {
      alert('Please fill all the fields');
    } else {
      fastModularExponentiation(
        parseInt(data.base),
        parseInt(data.exponent),
        parseInt(data.modulo)
      );
      setData({
        base: '',
        exponent: '',
        modulo: '',
      });
    }
  };

  return (
    <div className='my-10 '>
      <h1 className='text-gray-600 text-center text-4xl mb-2'>
        Fast Exponentiation
      </h1>
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
              NUMBER A (BASE):
            </label>
            <input
              id='base'
              placeholder='a'
              value={data.base}
              onChange={e => setData({...data, base: e.target.value})}
              type='text'
              className='block  px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-indigo-500 w-32 h-10  focus:outline-none focus:ring'
            />
          </div>
          <div className='flex items-center'>
            <label
              htmlFor='exponent'
              className='flex-1 text-left mr-4 text-md text-gray-500'
            >
              NUMBER B (EXPONENT):
            </label>
            <input
              id='exponent'
              placeholder='b'
              value={data.exponent}
              onChange={e => setData({...data, exponent: e.target.value})}
              type='text'
              className='block w-32 h-10  px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-indigo-500  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex items-center'>
            <label
              htmlFor='modulo'
              className='flex-1 text-left mr-4 text-md text-gray-500'
            >
              NUMBER N (MODULO):
            </label>
            <input
              id='modulo'
              placeholder='n'
              value={data.modulo}
              onChange={e => setData({...data, modulo: e.target.value})}
              type='text'
              className='block w-32 h-10  px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-indigo-500  focus:outline-none focus:ring'
            />
          </div>
        </div>
        <div className='flex mt-2'>
          <button
            type='submit'
            className='bg-indigo-500 text-md font-medium px-6 py-2 rounded-md focus:outline-none mr-4 '
          >
            Find
          </button>
          {result && <h3 className='text-gray-600'>Result: {result}</h3>}
        </div>
      </form>
    </div>
  );
}

export default FastExponentiation;
