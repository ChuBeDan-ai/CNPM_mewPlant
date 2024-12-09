import React from 'react';

import img from '../../asset/slider/slider8.jpg';
import img1 from '../../asset/slider/slider9.jpg';
import './Introduce.scss';
function Introduce() {
    return (
        <div className="intro_wrapper">
            <div className="intro_container">
                <div className="intro_left">
                    <img src={img1} alt="banner" className="left_intro_img" />
                </div>
                <div className="intro_right">
                    <img src={img} alt="banner" className="right_intro_img" />
                    <h2 className="intro_title">Về con người</h2>
                    <div className="lorem_intro">
                        <p className="p_intro">
                            MewPlant không chỉ đơn thuần là một nơi để mua cây cảnh, mà còn là một cộng đồng yêu cây
                            cảnh, nơi bạn có thể trao đổi kinh nghiệm và chia sẻ niềm đam mê với những người đam mê cây
                            cảnh khác.
                        </p>
                        <p className="p_intro">
                            Đặc biệt, MewPlant cam kết với việc bảo vệ môi trường và phát triển bền vững. Chúng tôi ưu
                            tiên sử dụng các phương pháp trồng cây hữu cơ và chất liệu tái chế trong việc sản xuất và
                            đóng gói sản phẩm.
                        </p>
                        <p className="p_intro">
                            Chúng tôi hiểu rằng cây cảnh không chỉ là những vật trang trí tuyệt đẹp, mà còn có thể mang
                            lại nhiều lợi ích sức khỏe và tinh thần cho chủ nhân của chúng.
                        </p>
                    </div>
                </div>
            </div>
            <div className="intro_additional">
                <h3 className="additional_title">Tại sao chọn MewPlant?</h3>
                <ul className="benefits_list">
                    <li>Chất lượng sản phẩm đảm bảo</li>
                    <li>Dịch vụ khách hàng tận tâm</li>
                    <li>Giá cả hợp lý</li>
                    <li>Giao hàng nhanh chóng</li>
                    <li>Chương trình khuyến mãi hấp dẫn</li>
                </ul>
            </div>
        </div>
    );
}

export default Introduce;
