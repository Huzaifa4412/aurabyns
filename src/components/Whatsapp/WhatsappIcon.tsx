import React from "react";
function WhatsappIcon() {
  return (
    <div className="fixed left-5 z-[999] bottom-[5%]">
      <a href="https://wa.link/oi406v">
        <img
          src={"whatsappIcon.svg"}
          alt="Whatsapp Icon"
          width={80}
          height={80}
          className="w-[45px] lg:w-[80px]"
        />
      </a>
    </div>
  );
}

export default WhatsappIcon;
