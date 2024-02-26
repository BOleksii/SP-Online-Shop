import React from "react";
// import "../../styles/footer.scss";
import "./footer.scss";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-large-flexbox">
        <div className="footer-flexbox">
          <div className="footer-websites">
            <div>
              <Link to="/" className="footer-logo">
                <div>
                  <svg
                    width="63"
                    height="23"
                    viewBox="0 0 63 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 22.1854C1.75007 20.4127 3.34591 18.8168 4.91296 17.1901C5.32426 16.7624 5.79314 16.7398 6.31549 16.7398C11.5253 16.7398 16.5294 16.7398 21.7392 16.7398C22.7242 16.7398 23.5283 16.1166 23.5283 15.0884C23.5283 14.2658 22.7242 13.5543 21.7392 13.5543C17.6262 13.5543 13.5852 13.5543 9.4722 13.5543C8.31244 13.5616 7.16809 13.2885 6.13657 12.7584C4.31452 11.8206 3.42406 10.085 3.87443 8.07987C4.08785 7.11845 4.42157 6.18775 4.86771 5.30978C6.06254 3.01062 8.17661 1.92068 10.5642 1.34897C11.7579 1.07216 12.9788 0.930056 14.2042 0.925336C20.096 0.884206 25.9899 0.906827 31.89 0.904771H33.0622C32.7784 1.23381 32.6201 1.44152 32.435 1.6266C31.0818 2.98388 29.7019 4.31855 28.3734 5.70051C28.1686 5.92526 27.9164 6.10177 27.6351 6.21735C27.3538 6.33292 27.0504 6.38467 26.7467 6.36887C22.1224 6.34693 17.4966 6.34693 12.8695 6.36887C12.3608 6.38187 11.8554 6.45574 11.3642 6.58892C10.5416 6.79456 10.3051 7.49583 10.1303 8.19915C10.0213 8.6598 10.5416 9.24796 11.0989 9.32199C11.7763 9.41739 12.459 9.47096 13.143 9.4824C17.256 9.5153 21.369 9.52353 25.482 9.55026C26.7853 9.55251 28.0598 9.93331 29.1508 10.6464C30.5903 11.5841 30.9235 13.0792 30.6253 14.6319C29.7821 19.0081 27.049 21.4183 22.7222 21.9756C21.4692 22.1233 20.2081 22.192 18.9465 22.1812C12.9497 22.1997 6.95505 22.1812 0.958325 22.1812L0 22.1854Z"
                      fill="white"
                    />
                    <path
                      d="M32.2603 13.5453C32.0094 11.1989 31.2752 9.22669 29.3401 7.78715C29.6774 7.44166 29.957 7.1558 30.2326 6.87406C32.0485 5.05613 33.8705 3.2423 35.6761 1.41613C35.8195 1.24985 35.9973 1.11666 36.1972 1.02577C36.3971 0.934876 36.6144 0.888442 36.8339 0.889672C45.16 0.904753 53.4867 0.910238 61.8141 0.906125C61.9476 0.918215 62.0802 0.938822 62.211 0.967819C62.0054 1.21049 61.8388 1.41408 61.6579 1.59711C60.3273 2.93177 58.9721 4.24175 57.6744 5.60727C57.4545 5.86058 57.1799 6.06067 56.8714 6.19247C56.563 6.32428 56.2286 6.38435 55.8935 6.36817C49.4176 6.33732 42.9376 6.35172 36.4638 6.35172C36.1903 6.35172 35.9147 6.32909 35.6412 6.35172C34.4957 6.46688 33.7204 7.80977 34.2695 8.81951C34.4258 9.1033 34.8165 9.30484 35.1435 9.43645C35.415 9.53928 35.7605 9.48375 36.0586 9.48375C41.3706 9.48375 46.6825 9.47141 51.9923 9.50432C53.3913 9.48458 54.7895 9.57881 56.1732 9.78606C57.9027 10.0842 59.3443 10.9089 59.7556 12.8173C59.8909 13.348 59.9195 13.9002 59.8399 14.442C59.0852 18.2773 57.1665 20.7862 53.0946 21.7507C51.8328 22.0365 50.5428 22.1793 49.249 22.1764C42.7731 22.2176 36.2931 22.1949 29.8213 22.1949C29.5272 22.1949 27.9993 22.1682 27.5818 22.1497C30.2326 20.9404 31.1395 18.8346 31.7133 16.8028C38.3537 16.8028 44.7801 16.7473 51.289 16.7473C52.5702 16.7473 53.3949 16.3362 53.3949 15.1782C53.3949 13.9484 52.235 13.5741 51.0546 13.5741C45.2306 13.5604 39.4039 13.5604 33.5744 13.5741L32.2603 13.5453Z"
                      fill="#FF6915"
                    />
                  </svg>
                </div>
                <div className="footer-logo-text">
                  <svg
                    width="78"
                    height="13"
                    viewBox="0 0 78 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.159424 8.48588H3.34377C3.23378 9.13485 3.36577 9.61333 3.73975 9.92131C3.98174 10.1413 4.44372 10.2513 5.12569 10.2513C5.68666 10.2513 6.11014 10.1633 6.39613 9.98731C6.82511 9.72332 7.0396 9.35484 7.0396 8.88186C7.0396 8.50788 6.88011 8.22739 6.56112 8.0404C6.37413 7.91941 6.01115 7.79841 5.47217 7.67742L4.48222 7.46293C3.42627 7.24294 2.6783 6.95695 2.23833 6.60497C1.62235 6.088 1.31437 5.39503 1.31437 4.52607C1.31437 3.38212 1.71035 2.44167 2.50231 1.7047C3.40427 0.835744 4.72971 0.401265 6.47862 0.401265C7.84256 0.401265 8.88751 0.648753 9.61348 1.14373C10.4274 1.6937 10.8344 2.46367 10.8344 3.45362C10.8344 3.58561 10.8234 3.75061 10.8014 3.9486H7.81506C7.89206 3.58561 7.78206 3.27763 7.48508 3.02464C7.24309 2.83765 6.83611 2.74415 6.26413 2.74415C5.74716 2.74415 5.34568 2.83765 5.05969 3.02464C4.75171 3.23363 4.59771 3.51962 4.59771 3.8826C4.59771 4.24558 4.7792 4.50407 5.14219 4.65806C5.30718 4.73506 5.82416 4.86705 6.69311 5.05404L7.38608 5.20254C8.25504 5.36753 8.95901 5.69201 9.49798 6.17599C10.037 6.71496 10.3064 7.41893 10.3064 8.28789C10.3064 9.71782 9.83347 10.8068 8.88751 11.5547C8.01855 12.2587 6.70411 12.6107 4.9442 12.6107C3.34927 12.6107 2.19983 12.3467 1.49586 11.8187C0.604903 11.1478 0.159424 10.0753 0.159424 8.60138V8.48588Z"
                      fill="white"
                    />
                    <path
                      d="M19.6917 4.24558L16.3093 12.2642H12.9435L12.2835 0.71475H15.4844L15.5339 8.68387L18.9822 0.71475H21.9026L21.9851 8.68387L25.4169 0.71475H28.6177L23.0575 12.2642H19.7082L19.6917 4.24558Z"
                      fill="white"
                    />
                    <path
                      d="M40.5144 5.33453C40.5144 6.37948 40.333 7.39693 39.97 8.38689C39.607 9.36584 39.101 10.1798 38.452 10.8288C37.1981 12.0057 35.5152 12.5942 33.4033 12.5942C31.6434 12.5942 30.3399 12.1707 29.493 11.3237C28.624 10.4768 28.1895 9.32184 28.1895 7.85891C28.1895 6.80296 28.3655 5.79651 28.7175 4.83955C29.0805 3.8716 29.5755 3.05764 30.2024 2.39767C31.4564 1.05573 33.1833 0.384766 35.3832 0.384766C37.0001 0.384766 38.2486 0.802746 39.1285 1.63871C40.0525 2.56266 40.5144 3.7946 40.5144 5.33453ZM31.6214 7.77641C31.6214 8.42538 31.7809 8.93686 32.0998 9.31084C32.4518 9.72882 32.9633 9.93781 33.6343 9.93781C34.4152 9.93781 35.0532 9.71782 35.5482 9.27784C36.0102 8.85986 36.3786 8.25489 36.6536 7.46293C36.9396 6.65997 37.0826 5.9065 37.0826 5.20254C37.0826 4.49857 36.8846 3.9486 36.4886 3.55262C36.1477 3.21163 35.6692 3.04114 35.0532 3.04114C34.3272 3.04114 33.6728 3.29413 33.0898 3.8001C32.6168 4.25108 32.2538 4.86155 32.0009 5.63152C31.7479 6.40148 31.6214 7.11645 31.6214 7.77641Z"
                      fill="white"
                    />
                    <path
                      d="M53.8717 5.33453C53.8717 6.37948 53.6902 7.39693 53.3273 8.38689C52.9643 9.36584 52.4583 10.1798 51.8093 10.8288C50.5554 12.0057 48.8725 12.5942 46.7606 12.5942C45.0006 12.5942 43.6972 12.1707 42.8502 11.3237C41.9813 10.4768 41.5468 9.32184 41.5468 7.85891C41.5468 6.80296 41.7228 5.79651 42.0748 4.83955C42.4378 3.8716 42.9327 3.05764 43.5597 2.39767C44.8137 1.05573 46.5406 0.384766 48.7405 0.384766C50.3574 0.384766 51.6058 0.802746 52.4858 1.63871C53.4097 2.56266 53.8717 3.7946 53.8717 5.33453ZM44.9786 7.77641C44.9786 8.42538 45.1381 8.93686 45.4571 9.31084C45.8091 9.72882 46.3206 9.93781 46.9916 9.93781C47.7725 9.93781 48.4105 9.71782 48.9055 9.27784C49.3674 8.85986 49.7359 8.25489 50.0109 7.46293C50.2969 6.65997 50.4399 5.9065 50.4399 5.20254C50.4399 4.49857 50.2419 3.9486 49.8459 3.55262C49.5049 3.21163 49.0265 3.04114 48.4105 3.04114C47.6845 3.04114 47.03 3.29413 46.4471 3.8001C45.9741 4.25108 45.6111 4.86155 45.3581 5.63152C45.1051 6.40148 44.9786 7.11645 44.9786 7.77641Z"
                      fill="white"
                    />
                    <path
                      d="M54.4586 8.48588H57.643C57.533 9.13485 57.665 9.61333 58.0389 9.92131C58.2809 10.1413 58.7429 10.2513 59.4249 10.2513C59.9858 10.2513 60.4093 10.1633 60.6953 9.98731C61.1243 9.72332 61.3388 9.35484 61.3388 8.88186C61.3388 8.50788 61.1793 8.22739 60.8603 8.0404C60.6733 7.91941 60.3103 7.79841 59.7714 7.67742L58.7814 7.46293C57.7255 7.24294 56.9775 6.95695 56.5375 6.60497C55.9215 6.088 55.6136 5.39503 55.6136 4.52607C55.6136 3.38212 56.0095 2.44167 56.8015 1.7047C57.7034 0.835744 59.0289 0.401265 60.7778 0.401265C62.1417 0.401265 63.1867 0.648753 63.9127 1.14373C64.7266 1.6937 65.1336 2.46367 65.1336 3.45362C65.1336 3.58561 65.1226 3.75061 65.1006 3.9486H62.1142C62.1912 3.58561 62.0812 3.27763 61.7843 3.02464C61.5423 2.83765 61.1353 2.74415 60.5633 2.74415C60.0463 2.74415 59.6449 2.83765 59.3589 3.02464C59.0509 3.23363 58.8969 3.51962 58.8969 3.8826C58.8969 4.24558 59.0784 4.50407 59.4414 4.65806C59.6064 4.73506 60.1233 4.86705 60.9923 5.05404L61.6853 5.20254C62.5542 5.36753 63.2582 5.69201 63.7972 6.17599C64.3361 6.71496 64.6056 7.41893 64.6056 8.28789C64.6056 9.71782 64.1326 10.8068 63.1867 11.5547C62.3177 12.2587 61.0033 12.6107 59.2434 12.6107C57.6485 12.6107 56.499 12.3467 55.795 11.8187C54.9041 11.1478 54.4586 10.0753 54.4586 8.60138V8.48588Z"
                      fill="white"
                    />
                    <path
                      d="M69.6681 7.51243L68.6616 12.2642H65.4937L67.9521 0.71475H71.12L70.229 4.87255H73.9413L74.8323 0.71475H78.0002L75.5418 12.2642H72.3739L73.3804 7.51243H69.6681Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="footer-logo-store"
                    width="61"
                    height="16"
                    viewBox="0 0 61 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4718 9.4849H0.971802V9.9849V10.1004C0.971802 11.6765 1.45288 12.923 2.50745 13.7172L2.50824 13.7177C3.34487 14.3452 4.63053 14.6097 6.25657 14.6097C8.06779 14.6097 9.51591 14.2501 10.5123 13.4442C11.5995 12.5834 12.1188 11.3369 12.1188 9.78691C12.1188 8.80554 11.81 7.96758 11.1639 7.32146L11.1544 7.31196L11.1444 7.30299C10.5253 6.74702 9.73382 6.39007 8.79758 6.21145L8.11068 6.06426C7.67891 5.97135 7.3394 5.89311 7.08973 5.82937C6.8243 5.7616 6.69927 5.71952 6.66601 5.70399L6.65799 5.70025L6.64984 5.69679C6.53315 5.64729 6.48053 5.59618 6.45542 5.56041C6.43227 5.52744 6.41009 5.47616 6.41009 5.38162C6.41009 5.19068 6.47686 5.05802 6.6492 4.93987C6.82253 4.82794 7.11334 4.74318 7.57651 4.74318C8.10749 4.74318 8.37238 4.83287 8.48336 4.91306C8.57111 4.99012 8.61222 5.05768 8.63182 5.11256C8.65164 5.16807 8.66025 5.24047 8.63832 5.34387L8.51025 5.94762H9.12744H12.1138H12.5613L12.6107 5.50284C12.6139 5.47468 12.6168 5.44694 12.6196 5.41965H12.8037H15.5685L13.816 13.6592L13.6876 14.2632H14.3051H17.4564H17.8613L17.9455 13.8672L19.7422 5.41965H22.7197H22.7731C22.6582 5.65792 22.5526 5.90576 22.4561 6.16301L22.455 6.16597C22.082 7.18017 21.8963 8.24522 21.8963 9.35793C21.8963 10.9247 22.3651 12.2188 23.3484 13.1786C24.3254 14.154 25.7809 14.5932 27.61 14.5932C29.8186 14.5932 31.6343 13.9752 33.001 12.6924L33.0068 12.6869L33.0124 12.6813C33.7188 11.9749 34.261 11.0969 34.6455 10.0597L34.6462 10.058C35.0292 9.01346 35.2212 7.93777 35.2212 6.83355C35.2212 5.1865 34.7231 3.8185 33.6888 2.78418L33.6889 2.78406L33.6796 2.77523C32.6793 1.82492 31.2914 1.38379 29.5899 1.38379C27.282 1.38379 25.4121 2.09191 24.0453 3.55381C23.7859 3.82705 23.5485 4.12349 23.3328 4.44256L23.7862 2.31813L23.9151 1.71377H23.2972H13.3811H12.9766L12.8922 2.10942L12.5029 3.93352C12.2941 3.24434 11.8595 2.67044 11.2067 2.22905C10.3635 1.65453 9.20345 1.40029 7.791 1.40029C5.96636 1.40029 4.49752 1.85354 3.47091 2.84064C2.57304 3.6777 2.12675 4.75275 2.12675 6.02509C2.12675 7.02829 2.49013 7.86663 3.22927 8.48698L3.22918 8.48709L3.23836 8.49443C3.77313 8.92225 4.61674 9.22714 5.69062 9.45103L6.67683 9.66471C7.21767 9.78621 7.49851 9.89233 7.60187 9.95921L7.61113 9.9652L7.62064 9.97077C7.78438 10.0668 7.85197 10.1818 7.85197 10.3809C7.85197 10.667 7.73917 10.8804 7.44646 11.0605C7.27586 11.1655 6.96179 11.2503 6.43807 11.2503C6.12072 11.2503 5.87647 11.2244 5.69592 11.1814C5.5124 11.1377 5.42504 11.0836 5.38847 11.0504L5.37942 11.0421L5.36999 11.0344C5.18245 10.8799 5.05691 10.6125 5.14912 10.0685L5.24803 9.4849H4.65615H1.4718ZM26.6891 10.4878L26.687 10.4854C26.467 10.2275 26.3281 9.84406 26.3281 9.27544C26.3281 8.67899 26.4426 8.01725 26.6826 7.28662C26.9143 6.58138 27.2364 6.05053 27.6332 5.66904C28.129 5.24184 28.666 5.04016 29.26 5.04016C29.7819 5.04016 30.1188 5.18212 30.3418 5.40519C30.6214 5.68473 30.7894 6.09426 30.7894 6.70156C30.7894 7.33775 30.6601 8.03408 30.3894 8.79419L30.3881 8.79795C30.1318 9.53582 29.8023 10.0591 29.4211 10.4046C29.0339 10.7481 28.5218 10.9368 27.841 10.9368C27.2808 10.9368 26.9247 10.7676 26.6891 10.4878ZM34.7695 13.6591L34.641 14.2632H35.2586H38.4264H38.8316L38.9156 13.8669L39.706 10.1384H40.9673C41.3279 10.1384 41.5874 10.1999 41.7704 10.2936C41.9005 10.367 41.9852 10.479 41.9852 10.7439C41.9852 10.8316 41.952 11.0906 41.8623 11.573C41.8621 11.5741 41.8619 11.5753 41.8617 11.5764L41.749 12.1394C41.6964 12.3663 41.6718 12.6058 41.6718 12.8558C41.6718 13.2591 41.77 13.6428 41.9625 14.0003L42.1041 14.2632H42.4027H45.6036H46.4387L46.0443 13.5271C45.9097 13.2758 45.8561 13.0595 45.8561 12.8723C45.8561 12.7327 45.8821 12.4998 45.9465 12.156L45.9466 12.156L45.9477 12.1495L46.0797 11.3905L46.0797 11.3905L46.0807 11.3845C46.1359 11.0421 46.1779 10.7684 46.2061 10.5652C46.2321 10.3777 46.2521 10.2137 46.2521 10.1169C46.2521 9.6194 46.1402 9.16405 45.8777 8.78743C45.8303 8.71944 45.779 8.6555 45.7241 8.59549C46.0619 8.43724 46.3678 8.23054 46.6387 7.97366C47.3619 7.30257 47.6875 6.34939 47.6875 5.20013C47.6875 4.09373 47.3487 3.17873 46.6049 2.54312L46.6049 2.54308L46.5987 2.53792C45.8977 1.95827 44.8859 1.71377 43.6567 1.71377H37.717H37.3122L37.2279 2.10968L34.7695 13.6591ZM57.5356 10.6069H51.8023L52.0164 9.61045H57.0076H57.4132L57.4969 9.21362L58.0084 6.78823L58.1356 6.18506H57.5191H52.7435L52.9233 5.35365H58.7236H59.1285L59.2126 4.95758L59.7736 2.3177L59.902 1.71377H59.2845H49.9295H49.5247L49.4404 2.10968L46.9821 13.6591L46.8535 14.2632H47.4711H56.9747H57.3801L57.4639 13.8665L58.0248 11.2102L58.1522 10.6069H57.5356ZM42.0728 6.87803H40.3984L40.7442 5.27115H42.4687C42.9085 5.27115 43.1498 5.35004 43.2702 5.43252C43.3334 5.48708 43.4042 5.5963 43.4042 5.8601C43.4042 6.25699 43.2774 6.48747 43.0706 6.63999C42.8619 6.78196 42.5448 6.87803 42.0728 6.87803Z"
                      stroke="#FF6915"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="footer-socials">
              <Link to="/" className="footer-socials-frame">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M16.9267 5.00719C16.8854 4.10471 16.7421 3.4884 16.5325 2.94919C16.3197 2.38346 15.9859 1.87103 15.5546 1.44747C15.1312 1.01616 14.6186 0.682256 14.0529 0.469314C13.5136 0.259866 12.8974 0.116654 11.9949 0.0756442C11.0908 0.0342461 10.8019 0.0244141 8.49938 0.0244141C6.19689 0.0244141 5.90801 0.0342461 5.00386 0.0753854C4.10139 0.116654 3.48521 0.259995 2.94587 0.469573C2.38014 0.682385 1.86772 1.01616 1.44417 1.44747C1.01285 1.8709 0.678955 2.38333 0.466015 2.94906C0.256568 3.4884 0.113358 4.10471 0.0723479 5.00706C0.0309501 5.91135 0.0211182 6.2001 0.0211182 8.50261C0.0211182 10.8053 0.0309501 11.0941 0.0723479 11.9983C0.113487 12.9006 0.256827 13.517 0.466403 14.0563C0.679213 14.6219 1.01298 15.1345 1.4443 15.5579C1.86772 15.9892 2.38027 16.323 2.946 16.5358C3.48521 16.7455 4.10151 16.8887 5.00399 16.93C5.90827 16.9712 6.19702 16.9809 8.49951 16.9809C10.802 16.9809 11.0909 16.9712 11.995 16.93C12.8975 16.8887 13.5137 16.7455 14.053 16.5358C15.1918 16.0954 16.0921 15.1951 16.5325 14.0563C16.7422 13.517 16.8854 12.9006 16.9267 11.9983C16.9678 11.094 16.9776 10.8053 16.9776 8.50274C16.9776 6.2001 16.9678 5.91135 16.9267 5.00719ZM15.4005 11.9288C15.3629 12.7555 15.2247 13.2044 15.1087 13.5031C14.8234 14.2426 14.2391 14.8269 13.4996 15.1122C13.2009 15.2282 12.752 15.3664 11.9253 15.4041C11.0315 15.4449 10.7633 15.4535 8.49938 15.4535C6.23531 15.4535 5.96726 15.4449 5.07333 15.4041C4.2468 15.3664 3.79789 15.2282 3.49905 15.1122C3.13087 14.9762 2.79774 14.7595 2.52426 14.4779C2.24263 14.2044 2.02593 13.8714 1.88997 13.5031C1.77393 13.2044 1.63576 12.7555 1.59811 11.9288C1.55736 11.0349 1.5487 10.7667 1.5487 8.50287C1.5487 6.23891 1.55736 5.97086 1.59811 5.07679C1.63589 4.25012 1.77393 3.80121 1.88997 3.5025C2.02593 3.13419 2.24276 2.80106 2.52426 2.52758C2.79774 2.24594 3.13087 2.02925 3.49918 1.89341C3.79789 1.77723 4.2468 1.6392 5.07346 1.60142C5.96739 1.56067 6.23557 1.552 8.49938 1.552C10.7632 1.552 11.0312 1.56067 11.9253 1.60155C12.752 1.6392 13.2007 1.77736 13.4996 1.89341C13.8678 2.02938 14.2009 2.24607 14.4744 2.52758C14.756 2.80106 14.9727 3.13419 15.1085 3.5025C15.2247 3.80121 15.3629 4.25012 15.4005 5.07679C15.4413 5.97073 15.4499 6.23891 15.4499 8.50274C15.4499 10.7667 15.4414 11.0348 15.4005 11.9288Z"
                      fill="white"
                    />
                    <path
                      d="M8.49925 4.14896C6.09482 4.14896 4.14563 6.09829 4.14563 8.50274C4.14563 10.9072 6.09482 12.8564 8.49925 12.8564C10.9038 12.8564 12.853 10.9072 12.853 8.50274C12.853 6.09829 10.9038 4.14896 8.49925 4.14896ZM8.49925 11.3288C6.93856 11.3287 5.67321 10.0634 5.67334 8.50261C5.67334 6.9419 6.93856 5.67654 8.49938 5.67654C10.0602 5.67667 11.3254 6.9419 11.3254 8.50261C11.3254 10.0634 10.0601 11.3288 8.49925 11.3288Z"
                      fill="white"
                    />
                    <path
                      d="M14.0424 3.97703C14.0424 4.53888 13.5869 4.99438 13.0251 4.99438C12.4631 4.99438 12.0076 4.53888 12.0076 3.97703C12.0076 3.41505 12.4631 2.95954 13.0251 2.95954C13.5869 2.95954 14.0424 3.41505 14.0424 3.97703Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>

              <Link to="/" className="footer-socials-frame">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  id="Layer_1"
                  data-name="Layer 1"
                >
                  <title>telegram</title>
                  <path
                    d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                    opacity="0.8"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link to="/" className="footer-socials-frame">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M16.2652 2.07061C15.6879 2.32457 15.0914 2.50039 14.4563 2.57853C15.1106 2.18782 15.6109 1.5627 15.8419 0.800828C15.2261 1.172 14.5526 1.42595 13.8406 1.58223C13.2632 0.95711 12.4358 0.566406 11.5313 0.566406C9.78019 0.566406 8.37542 2.01201 8.37542 3.77017C8.37542 4.02413 8.39466 4.25855 8.45239 4.49297C5.83529 4.37576 3.52608 3.08644 1.96736 1.15246C0.85124 3.18412 2.10206 4.86414 2.92953 5.43066C2.4292 5.43066 1.92887 5.27438 1.50552 5.03996C1.50552 6.62231 2.60239 7.93116 4.0264 8.22419C3.71851 8.32187 3.02575 8.38047 2.60239 8.2828C3.0065 9.55258 4.18035 10.4903 5.54664 10.5098C4.469 11.3694 2.89104 12.0531 0.870483 11.8382C2.27525 12.7563 3.93019 13.2838 5.71983 13.2838C11.5313 13.2838 14.6873 8.40001 14.6873 4.18041C14.6873 4.04367 14.6873 3.90692 14.668 3.77017C15.3223 3.28179 15.8611 2.71527 16.2652 2.07061Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="footer-shops-features">
            <p>ІНФОРМАЦІЯ</p>
            <ul className="footer-shops-list">
              <li>
                <Link to="/">Про магазин</Link>
              </li>
              <li>
                <Link to="/">Наш блог</Link>
              </li>
              <li>
                <Link to="/">Доставка</Link>
              </li>
              <li>
                <Link to="/">Оплата</Link>
              </li>
              <li>
                <Link to="/">Контакти</Link>
              </li>
            </ul>
          </div>

          <div className="footer-shops-features">
            <p>ТОВАРИ</p>
            <ul className="footer-shops-list">
              <li>
                <Link to="/">Каталог</Link>
              </li>
              <li>
                <Link to="/">Чоловічі</Link>
              </li>
              <li>
                <Link to="/">Жіночі</Link>
              </li>
              <li>
                <Link to="/">Дитячі</Link>
              </li>
              <li>
                <Link to="/">Розпродаж</Link>
              </li>
            </ul>
          </div>

          <div className="footer-shops-features">
            <p>МАГАЗИН</p>
            <ul className="footer-shops-list">
              <li>
                <Link to="/">Особистий кабінет</Link>
              </li>
              <li>
                <Link to="/">Обране</Link>
              </li>
              <li>
                <Link to="/">Кошик</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-subscribe">
          <div className="footer-subscribe-text">
            <p>ПІДПИСКА НА НОВИНИ</p>
            <p>Підпишіться на новини та знижки</p>
          </div>
          <div>
            <Subscribe />
          </div>
          <div className="footer-agree-policy">
            <p>
              Погоджуюсь з умовами
              <Link to="/"> політики конфіденційності</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-about-shop">
        <p>© 2023 - Swoosh Store - Інтернет-магазин оригінальних кросівок</p>
        <Link to="/">Політика конфіденційності</Link>
      </div>
    </div>
  );
};

export default Footer;
