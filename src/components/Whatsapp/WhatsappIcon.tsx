import React from "react";
function WhatsappIcon() {
  return (
    <div className="fixed left-5 z-[999] bottom-[5%]">
      <a href="https://api.whatsapp.com/message/WNUA7YUX5C6RI1?autoload=1&app_absent=0">
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
