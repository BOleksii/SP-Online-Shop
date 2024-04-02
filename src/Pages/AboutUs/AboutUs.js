import React from 'react';
import "./AboutUs.scss";
import BelowHeaderBreadcrumbs from '../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs';


const AboutUs = () => {
  return (
    <div className='about-us-page'>
    <div className='container'>
        <BelowHeaderBreadcrumbs
            paths={[
                { label: "Swoosh Store", url: "/" },
                { label: "Про магазин", url: "/about-us" },
            ]}
        />

        <h1 className='about-us-title'>
            Інтернет-магазин <br /> Swoosh store 
        </h1>

        <p className='about-us-text'>
            Ласкаво просимо у <span>Swoosh Store</span> - Ваше джерело справжніх кросівок Nike і неперевершеного стилю! Ми раді представити вам унікальну онлайн-платформу, де Ви зможете зануритися у світ інновацій та моди від легендарного бренду спортивного взуття.
        </p>

    </div>
        
        <div className='about-us-sneakers'></div>

    <div className='container'>
        <h2 className='about-us-paragraph'>Легендарна спадщина Nike:</h2>
        <p className='about-us-text'>
            Swoosh Store-Це місце, де історія та стиль поєднуються. Ми пишаємося тим, що пропонуємо вам тільки оригінальні кросівки Nike, продукцію, яка втілює більш ніж півстолітню спадщину інновацій, комфорту і якості. Кожна пара кросівок-це не просто спортивне взуття, це витвір мистецтва, що втілює дух перемоги і пристрасну відданість активному способу життя.
        </p>

        <p className='about-us-text'>
            SwooshStore-це не просто інтернет-магазин, а місце, де ваша пристрасть до стилю і якості зустрінеться з легендарною маркою Nike. Ми прагнемо надавати нашим клієнтам тільки справжні продукти, які відображають вищий стандарт дизайну, інновацій і технологій, закладених в кожній парі кросівок Nike.
        </p>


        <div className='about-us-guarantees'>
            <div className='about-us-guarantees-items'>
                <svg width="36" height="36" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9063 36.692C10.8805 34.8255 5.83163 30.6648 2.8506 25.1089C-0.130439 19.5531 -0.80423 13.0482 0.97482 7C7.21036 7.28513 13.312 5.13315 17.9871 1C22.6621 5.13315 28.7637 7.28513 34.9993 7C36.3576 11.6182 36.2948 16.5379 34.8191 21.12M23.9914 33L27.9942 37L36 29" stroke="#FF6915" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='about-us-quarantees-text'>
                    <p className='about-us-quarantees-text-1'>Тільки оригінальні товари</p>
                    <p className='about-us-quarantees-text-2'>Гарантована справжність Nike і висока якість кросівок.</p>
                </div>
            </div>

            <div className='about-us-guarantees-items'>
                <svg width="36" height="36" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5997 34.6332L27.2559 36.9091C27.127 36.9762 26.982 37.0062 26.837 36.9956C26.6921 36.9851 26.5529 36.9344 26.4351 36.8494C26.3173 36.7643 26.2254 36.6482 26.1698 36.5139C26.1141 36.3797 26.0969 36.2326 26.1199 36.0892L26.9499 31.2674L23.4361 27.8536C23.3312 27.7522 23.2569 27.6233 23.2218 27.4818C23.1866 27.3402 23.192 27.1916 23.2372 27.0529C23.2825 26.9142 23.3658 26.7911 23.4777 26.6975C23.5896 26.6039 23.7256 26.5437 23.8701 26.5236L28.7258 25.8197L30.8977 21.4339C30.9627 21.3033 31.0628 21.1934 31.1868 21.1165C31.3108 21.0397 31.4538 20.999 31.5997 20.999C31.7455 20.999 31.8885 21.0397 32.0126 21.1165C32.1366 21.1934 32.2367 21.3033 32.3016 21.4339L34.4735 25.8197L39.3293 26.5236C39.4734 26.5444 39.6088 26.605 39.7202 26.6987C39.8316 26.7923 39.9145 26.9153 39.9597 27.0537C40.0049 27.1921 40.0104 27.3403 39.9757 27.4817C39.941 27.623 39.8674 27.7519 39.7633 27.8536L36.2494 31.2674L37.0774 36.0872C37.1022 36.2309 37.0863 36.3787 37.0313 36.5138C36.9764 36.6489 36.8847 36.7659 36.7666 36.8515C36.6485 36.9372 36.5088 36.9879 36.3633 36.9981C36.2178 37.0083 36.0723 36.9775 35.9434 36.9091L31.5997 34.6332Z" stroke="#FF6915" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.40083 34.6332L4.05705 36.9091C3.92815 36.9762 3.78313 37.0062 3.63819 36.9956C3.49326 36.9851 3.35411 36.9344 3.23628 36.8494C3.11845 36.7643 3.02658 36.6482 2.97092 36.5139C2.91527 36.3797 2.89802 36.2326 2.92111 36.0892L3.75107 31.2674L0.237245 27.8536C0.132364 27.7522 0.0581036 27.6233 0.02294 27.4818C-0.0122235 27.3402 -0.00687323 27.1916 0.0383802 27.0529C0.0836336 26.9142 0.166967 26.7911 0.278867 26.6975C0.390767 26.6039 0.526726 26.5437 0.671223 26.5236L5.52698 25.8197L7.69887 21.4339C7.76382 21.3033 7.86394 21.1934 7.98795 21.1165C8.11196 21.0397 8.25495 20.999 8.40083 20.999C8.54672 20.999 8.68971 21.0397 8.81372 21.1165C8.93773 21.1934 9.03785 21.3033 9.1028 21.4339L11.2747 25.8197L16.1304 26.5236C16.2745 26.5444 16.4099 26.605 16.5213 26.6987C16.6327 26.7923 16.7157 26.9153 16.7609 27.0537C16.806 27.1921 16.8116 27.3403 16.7768 27.4817C16.7421 27.623 16.6685 27.7519 16.5644 27.8536L13.0506 31.2674L13.8786 36.0872C13.9034 36.2309 13.8875 36.3787 13.8325 36.5138C13.7776 36.6489 13.6859 36.7659 13.5678 36.8515C13.4497 36.9372 13.3099 36.9879 13.1644 36.9981C13.0189 37.0083 12.8735 36.9775 12.7446 36.9091L8.40083 34.6332Z" stroke="#FF6915" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.0003 14.6342L15.6565 16.9101C15.5276 16.9772 15.3825 17.0072 15.2376 16.9966C15.0927 16.9861 14.9535 16.9354 14.8357 16.8504C14.7179 16.7653 14.626 16.6492 14.5703 16.515C14.5147 16.3807 14.4974 16.2336 14.5205 16.0902L15.3505 11.2684L11.8367 7.85458C11.7318 7.75319 11.6575 7.62436 11.6224 7.48278C11.5872 7.34121 11.5925 7.1926 11.6378 7.05392C11.6831 6.91524 11.7664 6.79207 11.8783 6.69849C11.9902 6.6049 12.1261 6.54466 12.2706 6.52465L17.1264 5.82068L19.2983 1.43491C19.3632 1.30428 19.4634 1.19437 19.5874 1.11754C19.7114 1.04071 19.8544 1 20.0003 1C20.1461 1 20.2891 1.04071 20.4131 1.11754C20.5371 1.19437 20.6373 1.30428 20.7022 1.43491L22.8741 5.82068L27.7299 6.52465C27.8739 6.54538 28.0093 6.606 28.1207 6.69968C28.2322 6.79335 28.3151 6.91633 28.3603 7.05471C28.4054 7.19308 28.411 7.34133 28.3763 7.48269C28.3415 7.62405 28.268 7.75287 28.1638 7.85458L24.65 11.2684L25.478 16.0882C25.5028 16.2319 25.4869 16.3797 25.4319 16.5148C25.377 16.6499 25.2853 16.7669 25.1672 16.8525C25.0491 16.9382 24.9093 16.9889 24.7638 16.9991C24.6183 17.0093 24.4729 16.9785 24.344 16.9101L20.0003 14.6342Z" stroke="#FF6915" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='about-us-quarantees-text'>
                    <p className='about-us-quarantees-text-1'>Професійний сервіс</p>
                    <p className='about-us-quarantees-text-2'>Команда експертів, готових допомогти з вибором розміру відповісти на всі питання.</p>
                </div>
            </div>

            <div className='about-us-guarantees-items'>
                <svg width="36" height="36" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.78947 27.5263C4.7945 27.5263 5.75837 27.9256 6.46904 28.6362C7.1797 29.3469 7.57895 30.3108 7.57895 31.3158C7.57895 32.3208 7.1797 33.2847 6.46904 33.9954C5.75837 34.706 4.7945 35.1053 3.78947 35.1053C2.78444 35.1053 1.82058 34.706 1.10991 33.9954C0.399247 33.2847 0 32.3208 0 31.3158C0 30.3108 0.399247 29.3469 1.10991 28.6362C1.82058 27.9256 2.78444 27.5263 3.78947 27.5263ZM3.78947 27.5263H11.3684M3.78947 27.5263V1H0M3.78947 4.78947L30.3158 6.68421L28.9573 16.1882M14.2105 19.9474H3.78947M26.5263 37L32.8737 30.7777C33.2629 30.4 33.5725 29.9481 33.7843 29.4488C33.996 28.9494 34.1055 28.4127 34.1064 27.8703C34.1073 27.3279 33.9995 26.7909 33.7894 26.2908C33.5793 25.7908 33.2712 25.3379 32.8832 24.9589C32.0914 24.1846 31.0286 23.7501 29.9212 23.748C28.8137 23.7459 27.7492 24.1763 26.9545 24.9476L26.5301 25.3644L26.1076 24.9476C25.3159 24.1738 24.2535 23.7397 23.1465 23.7376C22.0395 23.7354 20.9755 24.1655 20.1808 24.9362C19.7915 25.3138 19.4817 25.7656 19.2698 26.2648C19.0579 26.7641 18.9482 27.3008 18.9472 27.8432C18.9461 28.3856 19.0537 28.9227 19.2636 29.4228C19.4736 29.9229 19.7816 30.3758 20.1695 30.7549L26.5263 37Z" stroke="#FF6915" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='about-us-quarantees-text'>
                    <p className='about-us-quarantees-text-1'>Ексклюзивний вибір</p>
                    <p className='about-us-quarantees-text-2'>Багатий асортимент оригінальних моделей Nike, включаючи рідкісні випуски.</p>
                </div>
            </div>
        </div>

        </div>

        <div className='about-us-last-section'>
        <div className='container about-us-container'>
        <p className='about-us-text about-us-text-1'> 
            Наші кросівки відрізняються не тільки естетичною пишністю, але і функціональністю. Ми пропонуємо широкий вибір моделей для різних видів спорту, від бігу до баскетболу, і для різних повсякденних ситуацій. Будь то ікона стилю, така як Air Max, або Універсальна класика, як Air Force 1 - у нас є саме те, що підійде вам.
        </p>

        <p className='about-us-text about-us-text-1 about-us-text-2'> 
            На SwooshStore ми цінуємо Вашу довіру і комфортність при покупці. Вся наша взуття поставляється безпосередньо від виробника, що гарантує вам автентичність кожної пари кросівок. Ми також пропонуємо зручні варіанти доставки та безпечні способи оплати, щоб зробити ваш досвід покупки максимально приємним та безтурботним.
        </p>

        <p className='about-us-text about-us-text-1 about-us-text-2'> 
            Приєднуйтесь до нашої спільноти любителів Nike, щоб розділити радість від якісного взуття та унікального стилю. Ми завжди готові допомогти вам з вибором, відповісти на питання і забезпечити Вас ідеальною парою кросівок, яка підкреслить вашу індивідуальність і дасть вам впевненість в кожному кроці.
        </p>

        <p className='about-us-text about-us-text-1' > 
            <span>
                Дякуємо, що обираєте SwooshStore – ваше джерело оригінальних кросівок Nike!
            </span>
        </p>
    </div>
        <div className='about-us-background'></div>

    </div>
    
    </div>

  )
}

export {AboutUs}