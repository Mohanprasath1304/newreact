import Cart from '../assets/cart.png';
import Logo1 from '../assets/logo1.jpg';
import Search from '../assets/search.png';
export default function Header(){
    return <section >
    <div className="bg-white text-black"><header className="flex justify-between px-5 bg-primary pt-6 text-lg">
<a className="mx-9"href="https://softek.radiantthemes.com/"><img src={Logo1} alt='https://softek.radiantthemes.com'/></a>
<ul className="flex text-black font-semibold">
    <li className='my-3 mr-8'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Home 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

        <ul class="flex ">
            <li class="relative group mt-3 mr-8">
                <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="https://softek.radiantthemes.com/about-us-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
                    <a href="https://softek.radiantthemes.com/about-us-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-02</a>
                    <a href="https://softek.radiantthemes.com/services-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-01</a>
                    <a href="https://softek.radiantthemes.com/services-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-02</a>
                    <a href="https://softek.radiantthemes.com/services-03/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-03</a>
                    <a href="https://softek.radiantthemes.com/why-choose-us/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Why Choose Us</a>
                    <a href="https://softek.radiantthemes.com/team/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Team</a>
                    <a href="https://softek.radiantthemes.com/pricing/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Pricing</a>
                    <a href="https://softek.radiantthemes.com/404" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">404 Page</a>
                </div>
            </li>
        </ul>
</div>
    <li className='my-3 mr-8 '>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Portfolio
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-8'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Blog
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-8'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Shop
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li><img class='carts' src={Cart} alt='https://softek.radiantthemes.com/cart/'/></li>
    <li><img className='w-5 my-4 mr-10' src={Search} alt='https://softek.radiantthemes.com/'/></li>
    <li> <a href="https://softek.radiantthemes.com/contact-01/" class="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-semibold px-7 py-3  mr-10 rounded hover:bg-red-600 ">Contect
    Us</a></li>
</ul>
</header>
</div>

</section>
}