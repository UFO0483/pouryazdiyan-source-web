// test branch
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Cat as Catalog, Home, ShoppingCart, Mail, Star } from 'lucide-react';
import { phoneNums } from './datas/homePage';
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = [
    {
      id: 1,
      title: 'روشور و کابین',
      description: 'انواع کابین دوش، روشور شیشه‌ای و پارتیشن حمام',
      image: 'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🚿'
    },
    {
      id: 2,
      title: 'کاشی و سرامیک',
      description: 'کاشی و سرامیک با کیفیت برای دیوار، کف و نما',
      image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🏠'
    },
    {
      id: 3,
      title: 'اسلب و آینه',
      description: 'سنگ اسلب طبیعی و مصنوعی، آینه‌های تزئینی',
      image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🪞'
    },
    {
      id: 4,
      title: 'هود و سینک و گاز',
      description: 'هود آشزخانه، سینک ظرفشویی و اجاق گاز رومیزی',
      image: 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🔥'
    },
    {
      id: 5,
      title: 'شیرآلات و سردوش',
      description: 'شیرآلات بهداشتی، سردوش و لوازم جانبی دوش',
      image: 'https://images.pexels.com/photos/6492405/pexels-photo-6492405.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🚰'
    },
    {
      id: 6,
      title: 'سرویس بهداشتی ایرانی و فرنگی',
      description: 'توالت فرنگی، ایرانی، روشویی و لوازم بهداشتی',
      image: 'https://images.pexels.com/photos/6489668/pexels-photo-6489668.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🚽'
    },
    {
      id: 7,
      title: 'وان و جکوزی',
      description: 'وان حمام، جکوزی و تجهیزات آب درمانی',
      image: 'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: '🛁'
    }
  ];

  const features = [
    { title: 'کیفیت برتر', description: 'محصولات با کیفیت و استاندارد بالا', icon: <Star className="w-8 h-8 text-amber-600" /> },
    { title: 'قیمت مناسب', description: 'بهترین قیمت در بازار', icon: <ShoppingCart className="w-8 h-8 text-stone-600" /> },
    { title: 'خدمات پس از فروش', description: 'پشتیبانی و خدمات پس از فروش', icon: <Phone className="w-8 h-8 text-stone-600" /> }
  ]; 
  
  return (
    <div className="min-h-screen bg-stone-200" dir="rtl">
       {/* Business Card Section */}
       <div id="adress"></div>
      <section id="about" className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">کارت ویزیت فروشگاه</h2>
            <p className="text-xl text-stone-600">اطلاعات تماس و آدرس فروشگاه</p>
          </div>
            
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex justify-center items-center items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-amber-400">بازرگانی پوریزدیان</h3>
                <p className="text-lg mb-8 text-stone-100 leading-relaxed">
                  مرجع تخصصی تجهیزات ساختمانی، بهداشتی و آشپزخانه
                  <br />
                  با کیفیت‌ترین برندهای داخلی و خارجی
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-amber-400 ml-3" />
                    <span className="text-lg">مشهد، بین قرنی 37 و چهارراه ابوطالب ، بازرگانی پوریزدیان </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-amber-400 ml-3" />
                    <div>
                      {
                        phoneNums.map((item , index) => (
                          <div className="text-lg" key={index} dir='ltr'>{item.phone}</div>
                        ))
                      }
                      
                      
                    </div>
                  </div>
                  
                  <div className="flex items-center" dir='rtl'>
                    <Instagram className="w-6 h-6 text-amber-400 ml-3" />
                    <span className="text-lg">@bazargany_poryazdian</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-amber-400 ml-3" />
                    <span className="text-lg">info@pourizdian.com</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hidden">
                  <Catalog className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-4 text-amber-400">کاتالوگ محصولات</h4>
                  <p className="text-stone-100 mb-6">
                    جهت دریافت کاتالوگ کامل محصولات و مشاوره رایگان با ما تماس بگیرید
                  </p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
                    دریافت کاتالوگ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-stone-800">بازرگانی پوریزدیان</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
                <a href="#home" className="text-stone-800 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">خانه</a>
                <a href="#products" className="text-stone-700 hover:text-stone-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">محصولات</a>
                <a href="#about" className="text-stone-700 hover:text-stone-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">درباره ما</a>
                <a href="#contact" className="text-stone-700 hover:text-stone-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">تماس با ما</a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-stone-200 inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-800 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-stone-800 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">خانه</a>
              <a href="#products" className="text-stone-700 hover:text-stone-800 block px-3 py-2 rounded-md text-base font-medium">محصولات</a>
              <a href="#about" className="text-stone-700 hover:text-stone-800 block px-3 py-2 rounded-md text-base font-medium">درباره ما</a>
              <a href="#contact" className="text-stone-700 hover:text-stone-800 block px-3 py-2 rounded-md text-base font-medium">تماس با ما</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900 bg-opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">بازرگانی پوریزدیان</h2>
          <p className="text-xl md:text-2xl mb-8 text-stone-100">تولید کننده کابین و دستشور ، گاز و سینک، جزیره دکوراسین داخلی </p>
          <p className="text-lg md:text-xl mb-12 text-stone-200 max-w-3xl mx-auto">
            با بیش از ۱۵ سال تجربه در زمینه فروش لوازم ساختمانی، کاشی و سرامیک، تجهیزات چینی بهداشتی و آشپزخانه، 
            مفتخر به ارائه بهترین محصولات با کیفیت‌ترین برندهای داخلی و خارجی هستیم.
          </p>
          <a href="#products" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 inline-block">
            مشاهده محصولات
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">چرا پوریزدیان؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-stone-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">محصولات ما</h2>
            <p className="text-xl text-stone-600">انواع تجهیزات ساختمانی و بهداشتی با بهترین کیفیت</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 text-3xl bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{category.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{category.description}</p>
                  <button className="mt-4 bg-stone-700 hover:bg-stone-800 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 w-full">
                    مشاهده محصولات
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-100" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">تماس با ما</h2>
            <p className="text-xl text-stone-600">برای مشاوره و خرید محصولات با ما در تماس باشید</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">اطلاعات تماس</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-stone-600 mt-1 ml-4" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">آدرس فروشگاه</h4>
                    <p className="text-stone-600">مشهد، بین قرنی 37 و چهارراه ابوطالب، بازرگانی پوریزدیان</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-stone-600 mt-1 ml-4" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">شماره تماس</h4>
                    {
                        phoneNums.map((item , index) => (
                          <p className="text-stone-600" key={index} dir='ltr'>
                            {item.phone} {item.tit}
                          </p>
                        ))
                      }
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-stone-600 mt-1 ml-4" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">شبکه‌های اجتماعی</h4>
                    <p className="text-stone-600" dir='ltr'>
                      <span className='rtl'> @bazargany_poryazdian </span> : اینستاگرام
                      </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-stone-600 mt-1 ml-4" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">ایمیل</h4>
                    <p className="text-stone-600">info@pourizdian.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">ساعات کاری</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium text-stone-900">شنبه تا چهارشنبه</span>
                  <span className="text-stone-600">۸:۰۰ - ۱۸:۰۰</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium text-stone-900">پنج‌شنبه</span>
                  <span className="text-stone-600">۸:۰۰ - ۱۴:۰۰</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-stone-900">جمعه</span>
                  <span className="text-red-600 font-medium">تعطیل</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-stone-50 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">خدمات ویژه</h4>
                <ul className="text-sm text-stone-800 space-y-1">
                  <li>• مشاوره رایگان</li>
                  <li>• تحویل در محل</li>
                  <li>• نصب و راه‌اندازی</li>
                  <li>• گارانتی معتبر</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">بازرگانی پوریزدیان</h3>
            <p className="text-stone-400 mb-6">مرجع تخصصی لوازم ساختمانی و بهداشتی</p>
            <div className="flex justify-center space-x-6 space-x-reverse mb-6">
              <Phone className="w-6 h-6 text-stone-400 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-stone-400 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
              <Mail className="w-6 h-6 text-stone-400 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
            </div>
            <p className="text-stone-500 text-sm">
              © ۱۴۰۳ بازرگانی پوریزدیان. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;