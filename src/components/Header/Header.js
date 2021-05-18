import React from 'react';
import {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';
import SearchProduct from  "../Search/SearchProduct";

function Header(){
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	
	return(
		<nav className="header">
			
			<div className="header__row">
				<div className="header__action__left">
					<SearchProduct/>
					<div className="barcode">
						<i type="button" className="fa fa-barcode fa__edit" title="Chế độ nhập" aria-hidden="true"></i>
					</div>
				</div>
				<div className="header__action__right">
					<i type="button" className="fa fa-map-marker fa__edit" title="Chi nhánh trung tâm" aria-hidden="true"></i>
					<i type="button" className="fa fa-exclamation fa__edit" title="Danh sách các phím tắt" aria-hidden="true"></i>
					<i type="button" className="fa fa-recycle fa__edit" title="Xử lí đặt hàng" aria-hidden="true"></i>
					<i type="button" className="fa fa-reply-all fa__edit" title="Trả hàng" aria-hidden="true"></i>
					<i type="button" className="fa fa-refresh fa__edit" title="Đồng bộ dữ liệu" aria-hidden="true"></i>
					<i type="button" className="fa fa-print fa__edit" title="Thiết lập in" aria-hidden="true"></i>
					<Dropdown isOpen={dropdownOpen} toggle={toggle} >
						<DropdownToggle caret color="primary" className="fa fa-bars fa__edit__menu Dmenu" aria-hidden="true"></DropdownToggle>
						<DropdownMenu right  >
							<DropdownItem >
								<span className="fa fa-align-left fa__size" aria-hidden="true"></span> 
								Xem báo cuối ngày
							</DropdownItem>

							<DropdownItem href="#">
								<span className="fa fa-recycle fa__size" aria-hidden="true"></span> 
								Xử lí đặt hàng
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-reply-all fa__size" aria-hidden="true"></span>
								Chọn hoá đơn trả hàng
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-file-text-o fa__size" aria-hidden="true"></span>
								Lập phiếu thu
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-upload fa__size" aria-hidden="true"></span>
								Import
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-eye-slash fa__size" aria-hidden="true"></span>
								Tuỳ chọn hiển thị
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-list-alt fa__size" aria-hidden="true"></span>
								Quản lí
							</DropdownItem>

							<DropdownItem>
								<span className="fa fa-external-link fa__size" aria-hidden="true"></span>
								Đăng xuất
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
				
				
			</div>
		</nav>
	)
}

export default Header;