import React from 'react'
import Nav from './Nav'
const Account = () => {
  return (
    <>
    <Nav/>
    <div className='flex flex-wrap gap-8 p-6 ml-20'>
  <div className='w-full md:w-1/3 lg:w-1/5 p-4 '>
    <h1 className='text-2xl font-bold mb-4'>Personal Info</h1>
    <ul className='space-y-2'>
    <li className='hover:underline cursor-pointer'>
  <a href="/myunimarket/personal-information" className="text-inherit">Personal Information</a>
</li>

<li className='hover:underline cursor-pointer'>
  <a href="/myunimarket/security" className="text-inherit">Sign-in and Security</a>
</li>
<li className='hover:underline cursor-pointer'>
  <a href="/myunimarket/addresses" className="text-inherit">Addresses</a>
</li>
      <li className='hover:underline cursor-pointer'>
      <a href="/myunimarket/feedback" className="text-inherit">Feedback</a>
      </li>
      <li className='hover:underline cursor-pointer'>Request your UniMarket data</li>
    </ul>
  </div>

  <div className='w-full md:w-1/3 lg:w-1/5 p-4 '>
    <h1 className='text-2xl font-bold mb-4'>Payment Information</h1>
    <ul className='space-y-2'>
      <li className='hover:underline cursor-pointer'>Payments</li>
    </ul>
  </div>

  <div className='w-full md:w-1/3 lg:w-1/5 p-4 '>
    <h1 className='text-2xl font-bold mb-4'>Account Preferences</h1>
    <ul className='space-y-2'>
      <li className='hover:underline cursor-pointer'>Permissions</li>
      <li className='hover:underline cursor-pointer'>Advertisement Preferences</li>
      <li className='hover:underline cursor-pointer'>Communication Preferences</li>
      <li className='hover:underline cursor-pointer'>Close Account</li>
    </ul>
  </div>

  <div className='w-full md:w-1/2 lg:w-1/5 p-4 '>
    <h1 className='text-2xl font-bold mb-4'>Selling</h1>
    <ul className='space-y-2'>
      <li className='hover:underline cursor-pointer'>Seller Dashboard</li>
      <li className='hover:underline cursor-pointer'>
      <a href="/myunimarket/sell-an-item" className="text-inherit">Sell an item</a>
      </li>
      <li className='hover:underline cursor-pointer'>
      <a href="/myunimarket/subscriptions" className="text-inherit">Subscriptions</a>
      </li>
    </ul>
  </div>

  <div className='w-full md:w-1/2 lg:w-1/5 p-4 '>
    <h1 className='text-2xl font-bold mb-4'>Donation Preferences</h1>
    <ul className='space-y-2'>
      <li className='hover:underline cursor-pointer'>Pending Donations</li>
      <li className='hover:underline cursor-pointer'>Invoice Donations</li>
      <li className='hover:underline cursor-pointer'>History</li>
      <li className='hover:underline cursor-pointer'>Favorites</li>
      <li className='hover:underline cursor-pointer'>Settings</li>
    </ul>
  </div>
</div>


</>
  )
}

export default Account
