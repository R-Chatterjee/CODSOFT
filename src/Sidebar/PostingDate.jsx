import React from 'react'
import Input from '../Components/Input'


const PostingDate = ({handleChange}) => {
  const now = new Date();
  const aDayAgo = new Date(now - 24*60*60*1000);
  const sevenDaysAgo = new Date(now - 7*24*60*60*1000);
  const aMonthAgo = new Date(now - 30*24*60*60*1000);

  const aDayAgoDate = aDayAgo.toISOString().slice(0,10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
  const aMonthAgoDate = aMonthAgo.toISOString().slice(0,10);
  return (
        <div>
            <h4 className='text-emerald-600 text-lg font-medium mb-2'>Date of posting</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>
                    <span className='text-emerald-800'>All</span>
                </label>
                    <Input handleChange={handleChange} value={aDayAgoDate} title="Last 24 hours" name="test" />
                    <Input handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test" />
                    <Input handleChange={handleChange} value={aMonthAgoDate} title="Last month" name="test" />

            </div>
        </div>
    )
}

export default PostingDate