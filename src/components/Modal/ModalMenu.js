// import { FaSearch, FaTimes, FaRegUser } from "react-icons/fa";
// import { BsHeart, BsBasket3 } from "react-icons/bs";
// import { Select } from "../select/Select";
// // import Select from 'react-select';

// import "./ModalMenu.scss";

// const ModalMenu = ({ children, isActive }) => {
//    return (
// //     <div className="modal-wrapper">
// //       <FaTimes />
// //       <div className={`modal ${isActive ? "active" : ""}`}>
// //         <div className="search-container">
// //           <input
// //             className="search-container__input"
// //             type="text"
// //             placeholder="Пошук..."
// //           />
// //           <FaSearch />
// //         </div>
// //         {/* ------------- */}
// //         <div className="modalForm-container">
// //           <form className="modalForm-form">
// //             {/* <Link to="/AuthorizationFormPage" className="topheader-form__item"> */}
// //             <FaRegUser className="topheader-form__icon" color="curent-color" />
// //             <p className="topheader-form__text">Логін/Регістрація</p>
// //             {/* </Link> */}
// //           </form>
// //           <div className="modalForm-icon__wrapper">
// //             <div className="modalForm-icon__item">
// //               {/* <Link to="/FavoritePage">
// // 			<span className="count"></span>
// // 			<BsHeart />
// // 			</Link> */}
// //               <BsHeart />
// //             </div>
// //             <div className="modalForm-icon__item">
// //               {/* <Link to="/BasketPage">
// // 				<span className="count"></span>
// // 			<BsBasket3 />
// // 			</Link> */}
// //               <BsBasket3 />
// //             </div>
// //           </div>
// //         </div>
// //         {/* ===================== */}
// //         <div className="modalSelect-wrapper">
// //           {/* <div className="modalSelect-wrapper__item">
// //           <Select
// //             className="modalSelect-wrapper__item-catalog"
// //             title="Каталог"
// //             options={[
// // 				{ value: "", label: "" },
// //               { value: "demi-season", label: "Демісезон" },
// //               { value: "summer", label: "Літо" },
// //               { value: "winter", label: "Зима" },
// //               { value: "models", label: "Моделі" },
// //             ]}
// //           />
// //         </div> */}
// //          <div className="modalSelect-wrapper__item">
// //     <Select
// //         className="modalSelect-wrapper__item-catalog"
// //         title="Каталог"
// //         options={[
// //             { value: "", label: "" },
// //             { label: "Демісезон", options: [
// //                 { value: "spring", label: "Весна" },
// //                 { value: "autumn", label: "Осінь" }
// //             ]},
// //             { label: "Літо", options: [
// //                 { value: "june", label: "Червень" },
// //                 { value: "july", label: "Липень" }
// //             ]}
// //             // Додайте інші категорії, які вам потрібні
// //         ]}
// //     />
// // </div>
// //         </div>
// //         <h3>modal</h3>
// //         {children}
// //       </div>
// //     </div>
//   );
//  };

// export default ModalMenu;

import CustomSelectWithSelect from "../CustomSelectWithSelect/CustomSelectWithSelect";
const ModalMenu = () => {
	return ( 
		<div className="modal-wrapper">
			<CustomSelectWithSelect />
		</div>
	 );
}
 
export default ModalMenu;
