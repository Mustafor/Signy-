import './App.css'
import { ArrowIcon, BorderIcon, LogoIcon, MinusIcon, PlusIcon } from './assets/images/logo'
import Box from './assets/images/box.png'
import li1 from './assets/images/li1.svg'
import li2 from './assets/images/li2.svg'
import li3 from './assets/images/li3.svg'
import content1 from './assets/images/content1.png'
import content2 from './assets/images/content2.png'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import img4 from './assets/images/img4.png'
import plc from './assets/images/plc.png'
import plc2 from './assets/images/plc2.png'
import vd from './assets/images/vd.png'


function App() {
  return (
    <>
    <div className='bg-slate-300'>
      <div className='px-[104px] pt-[36px] flex items-center justify-between'>
        <div>
          <a href="/">
          <LogoIcon/>
          </a>
        </div>
        <ul className='flex items-center gap-[36px]'>
          <li>
            <a className='text-[14px] font-medium hover:text-white duration-300 text-[#061224E5]' href="#">0 800 750 643</a>
          </li>
          <li>
            <a className='text-[14px] font-medium hover:text-white duration-300 text-[#061224E5]' href="#">ПРО НАС</a>
          </li>
          <li>
            <a className='text-[14px] font-medium hover:text-white duration-300 text-[#061224E5]' href="#">ЦЕНЫ</a>
          </li>
          <li>
            <a className='text-[14px] font-medium hover:text-white duration-300 text-[#061224E5]' href="#">КОНТАКТЫ</a>
          </li>
        </ul>
        <div className='flex items-center gap-[25px]'>
          <button className='w-[110px] rounded-full py-[8px] uppercase bg-transparent border-[2px] border-[#1064E5] text-[14px] text-[#061224E5] hover:bg-[#1064E5] hover:text-white duration-300'>Вход</button>
          <button className='bg-[#1064E5] w-[189px] py-[8px] text-white text-[14px] border-[2px] border-[#1064E5] rounded-full duration-300 hover:bg-transparent hover:border-[2px] uppercase'>регистрация</button>
          <div className='flex items-center gap-[6px] cursor-pointer hover:text-white duration-300'>
            <span className='uppercase text-[14px] text-[#061224E5] hover:text-white duration-300'>Рус</span>
            <ArrowIcon/>
          </div>
        </div>
      </div>
      <div className='px-[104px] flex justify-between'>
        <div className='pt-[108px] pb-[50px]'>
          <h1 className='w-[586px] text-[40px] font-bold mb-[14px] tetx-[#061224E5]'>Цифровой документооборот в три этапа:</h1>
          <div className='flex items-center gap-[16px]'>
            <strong className='text-[24px] font-bold text-[#061224E5]'>1</strong>
            <BorderIcon/>
            <strong className='text-[18px] text-slate-400 font-bold'>2</strong>
            <BorderIcon/>
            <strong className='text-[18px] text-slate-400 font-bold'>3</strong>
          </div>
          <strong className='text-[24px] font-bold text-[#061224E5]'>Быстрая регистрация</strong>
          <p className='w-[454px] text-[16px] text-[#061224E5] mb-[31px] mt-[14px]'>Мы создали, возможно, самую простую регистрацию. Регистрируйся, получай полный доступ к сервису и 1000 подписей документов в подарок!</p>
          <button className='uppercase w-[295px] py-[17px] font-bold bg-[#1064E5] rounded-full border-[2px] border-[#1064E5] text-white text-[16px] duration-300 hover:bg-transparent hover:border-[2px] hover:text-black'>Попробовать Бесплатно</button>
        </div>
        <img className='mr-40' src={Box} alt="Img" width={935} height={550}/>
      </div>
    </div>
    <div className='px-[104px] py-[54px]'>
      <ul className='flex gap-[50px] justify-center'>
        <li className='flex gap-[20px]'>
          <div>
            <img src={li1} alt="List img" width={60} height={60}/>
          </div>
          <div>
          <strong className='text-[24px] text-[#061224E5] mb-[20px]'>Моментально</strong>
          <p className='text-[16px] w-[226px] text-[#061224E5]'>Никаких задержек.
          1 секунда на подписание</p>
          </div>
        </li>
        <li className='flex gap-[20px]'>
          <div>
            <img src={li2} alt="List img" width={60} height={60}/>
          </div>
          <div>
          <strong className='text-[24px] text-[#061224E5] mb-[20px]'>Глобально</strong>
          <p className='text-[16px] w-[226px] text-[#061224E5]'>Сервис доступен 24\7 со всех устройств</p>
          </div>
        </li>
        <li className='flex gap-[20px]'>
          <div>
            <img src={li3} alt="List img" width={60} height={60}/>
          </div>
          <div>
          <strong className='text-[24px] text-[#061224E5] mb-[20px]'>Экономно</strong>
          <p className='text-[16px] w-[226px] text-[#061224E5]'>В 30 раз дешевле чем почта и курьеры</p>
          </div>
        </li>
      </ul>
    </div>
    <div className='px-[104px] flex justify-between py-[57px] bg-[#D8F1F0]'>
      <div>
        <h2 className='text-[40px] font-bold text-[#061224E5] mb-[18px]'>Комфорт в работе</h2>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Создавай документы по твоим личным привычным шаблонам. Это индивидуально!</p>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Настраивай порядок подписание документа, если вас несколько человек. Это ответственно!</p>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Загружай XML файл с собственным шаблоном готового документа. Это удобно!</p>
        <p className='text-[18px] text-[#061224E5] w-[512px]'>Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!</p>
        <button className='w-[217px] rounded-full bg-transparent mt-[20px] border-[2px] border-[#1064E5] py-[10px] text-[#061224E5] font-bold text-[14px] duration-300 hover:bg-[#1064E5] hover:text-white'>Узнать больше</button>
      </div>
      <img src={content1} alt="content" width={595} height={338}/>
    </div>
    <div className='px-[104px] flex justify-between pb-[50px] py-[57px] bg-[#D8F1F0]'>
      <img src={content2} alt="content2" width={595} height={338}/>
      <div>
        <h2 className='text-[40px] font-bold text-[#061224E5] mb-[18px]'>Наш продукт это:</h2>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Web версия без установки программного обеспечения</p>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Возможность бесплатно и безлимитно обрабатывать входящие документы</p>
        <p className='text-[18px] text-[#061224E5] w-[512px] mb-[10px]'>Простота интеграции с 1С и другими сервисами</p>
        <p className='text-[18px] text-[#061224E5] w-[512px]'>Поддержка входа через Mobile ID</p>
        <button className='w-[217px] rounded-full bg-[#1064E5] mt-[20px] border-[2px] border-[#1064E5] py-[10px] text-white hover:text-[#061224E5] font-bold text-[14px] duration-300 hover:bg-transparent hover:text-white'>Зарегистрироваться</button>
      </div>
    </div>
    <div className='px-[104px] py-[57px]'>
      <h2 className='text-center font-bold text-[#061224E5] text-[40px] mb-[63px]'>Пакеты цифровых подписей </h2>
      <ul className='flex justify-center gap-[32px]'>
        <li className='p-[32px] flex flex-col w-[256px] rounded-md bg-[#DEEEFC]'>
          <strong className='text-[28px] font-bold text-[#061224E5]'>Demo</strong>
          <span className='mt-[44px] mb-[12px] font-bold text-[#061224E5] text-[16px]'>30 документів</span>
          <div className='flex items-baseline mb-[50px] gap-[2px]'>
            <strong className='text-[#061224E5] text-[48px] font-extrabold'>0</strong>
            <span className='text-[#061224E5] text-[20px]'>грн/місяць</span>
          </div>
          <button className='w-full py-[9px] bg-[#1064E5] border-[2px] border-[#1064E5] text-white uppercase rounded-full hover:border-[2px] hover:bg-transparent hover:text-[#1064E5] duration-300'>Зарегистрироваться</button>
        </li>
        <li className='p-[32px] flex flex-col w-[256px] rounded-md bg-[#DEEEFC]'>
          <strong className='text-[28px] font-bold text-[#061224E5]'>Business</strong>
          <span className='mt-[44px] mb-[12px] font-bold text-[#061224E5] text-[16px]'>1 000 документів</span>
          <div className='flex items-baseline mb-[50px] gap-[2px]'>
            <strong className='text-[#061224E5] text-[48px] font-extrabold'>1 000</strong>
            <span className='text-[#061224E5] text-[20px]'>грн/рік</span>
          </div>
          <button className='w-full py-[9px] bg-[#1064E5] border-[2px] border-[#1064E5] text-white uppercase rounded-full hover:border-[2px] hover:bg-transparent hover:text-[#1064E5] duration-300'>Закакзать</button>
        </li>
        <li className='p-[32px] flex flex-col w-[256px] rounded-md bg-[#DEEEFC]'>
          <strong className='text-[28px] font-bold text-[#061224E5]'>Pro</strong>
          <span className='mt-[44px] mb-[12px] font-bold text-[#061224E5] text-[16px]'>10 000 документів</span>
          <div className='flex items-baseline mb-[50px] gap-[2px]'>
            <strong className='text-[#061224E5] text-[48px] font-extrabold'>9000</strong>
            <span className='text-[#061224E5] text-[20px]'>грн/рік</span>
          </div>
          <button className='w-full py-[9px] bg-[#1064E5] border-[2px] border-[#1064E5] text-white uppercase rounded-full hover:border-[2px] hover:bg-transparent hover:text-[#1064E5] duration-300'>Заказать</button>
        </li>
        <li className='px-[32px] pt-[32px] flex flex-col w-[256px] rounded-md bg-[#DEEEFC]'>
          <strong className='text-[28px] font-bold text-[#061224E5]'>Individual</strong>
          <p className='w-[180px] text-[16px] font-medium mt-[70px] text-[#061224E5] mb-[84px]'>Необмежена кількість документів</p>
          <button className='w-full py-[9px] bg-[#1064E5] border-[2px] border-[#1064E5] text-white uppercase rounded-full hover:border-[2px] hover:bg-transparent hover:text-[#1064E5] duration-300'>Заказать</button>
        </li>
      </ul>
    </div>
    <div className='px-[104px] flex flex-col items-center justify-center py-[43px] bg-[#D8F1F0]'>
      <h2 className='text-[73px] block font-extrabold text-[#061224E5]'>5 820 125 114 </h2>
      <span className='w-[470px] block text-[40px] font-bold mb-[12px] text-[#061224E5]'>подписано документов</span>
      <p className='text-[18px] text-center block text-[#061224E5] w-[478px]'>Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы гордимся Signy как безопасным и комфортным продуктом</p>
    </div>
    <div className='px-[104px] py-[47px]'>
      <h2 className='text-center text-[#061224E5] text-[40px] mb-[46px] font-bold'>Друзья Signy</h2>
      <div className='flex items-center justify-center gap-[104px]'>
        <img src={img1} alt="img1" width={176} height={106}/>
        <img src={img2} alt="img1" width={207} height={84}/>
        <img src={img3} alt="img1" width={189} height={84}/>
        <img src={img4} alt="img1" width={128} height={118}/>
      </div>
    </div>
    <div className='px-[104px] py-[38px] bg-[#D8F1F0]'>
      <h2 className='font-bold text-[#061224E5] text-[40px] mb-[32px] text-center'>Интересно пишем про </h2>
      <ul className='flex justify-center gap-[54px]'>
        <li>
            <img className='rounded-md mb-[14px]' src={plc} alt="plc" width={374} height={395}/>
            <span className='text-[14px] px-[14px] font-medium text-[#061224E5] mb-[6px]'>28.05.2020</span>
            <p className='w-[287px] text-[24px] px-[14px] font-bold text-[#061224E5]'>Заголовок короткий в две строки</p>
        </li>
        <li>
            <img className='rounded-md mb-[14px]' src={plc2} alt="plc" width={374} height={395}/>
            <span className='text-[14px] px-[14px] font-medium text-[#061224E5] mb-[6px]'>28.05.2020</span>
            <p className='w-[287px] text-[24px] px-[14px] font-bold text-[#061224E5]'>Заголовок короткий в две строки</p>
        </li>
        <li>
            <img className='rounded-md mb-[14px]' src={plc} alt="plc" width={374} height={395}/>
            <span className='text-[14px] px-[14px] font-medium text-[#061224E5] mb-[6px]'>28.05.2020</span>
            <p className='w-[287px] text-[24px] px-[14px] font-bold text-[#061224E5]'>Заголовок короткий в две строки</p>
        </li>
      </ul>
    </div>
    <div className='px-[104px] py-[49px]'>
      <h2 className='text-center text-[#061224E5] text-[40px] mb-[20px] font-bold'>Познакомимся в живую? </h2>
      <img className='rounded-md mx-auto cursor-pointer' src={vd} alt="vd" width={734} height={451}/>
    </div>
    <div className='px-[104px] py-[30px] bg-[#DEEEFC]'>
      <h2 className='text-center text-[#061224E5] text-[40px] font-bold mb-[36px]'>Популярные вопросы и ответы на них</h2>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <PlusIcon/>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</p>
      </div>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <MinusIcon/>
        <div>
          <p className='w-[458px] text-[#061224E5] font-bold tetx-[18px] mb-[6px]'>Почему после ремонта дорога опять проваливается?</p>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>- Потому что делают ее без соблюдения технологических процессов.</p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <PlusIcon/>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>Почему вода мокрая?</p>
      </div>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <PlusIcon/>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>Видят ли микробы друг друга?</p>
      </div>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <PlusIcon/>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>Почему кровь красная а вены синие?</p>
      </div>
      <div className='flex items-center justify-center gap-[19px] mb-[18px]'>
        <PlusIcon/>
        <p className='w-[496px] text-[#061224E5] text-[16px]'>Из чего сделана радуга? </p>
      </div>
    </div>
    <div className='px-[104xp] py-[56px]'>
      <h2 className='text-center text-[#061224E5] text-[40px] mb-[30px] font-bold'>Подпишись на наши новости!</h2>
      <strong className='flex items-center justify-center text-[#061224E5] text-[18px] font-bold mb-[30px]'>Введи свой электронный адрес и будь в курсе всех обновлений</strong>
      <div className='flex items-center justify-center gap-[18px]'>
        <input className='w-[360px] py-[12px] rounded-full border-[2px] border-[#1064E5] duration-300 hover:shadow-2xl outline-none px-[20px] text-[16px] font-bold text-[#1064E5]' type="text"/>
        <button className='w-[200px] py-[12px] text-white text-[24px] bg-[#1064E5] rounded-full uppercase hover:border-[2px] border-[2px] border-[#1064E5] hover:bg-transparent hover:text-[#1064E5] duration-300'>отправить</button>
      </div>
    </div>
    </>
  )
}

export default App
