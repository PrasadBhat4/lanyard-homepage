import React from "react"

const Graphic = props => {
  return (
    <svg width={360} height={640} viewBox="0 0 360 640" fill="none" {...props}>
      <g clipPath="url(#clip0)">
        <rect
          width={360}
          height={640}
          fill={props.evDarkColor ? props.evDarkColor : "#1E2A39"}
        />
        <g filter="url(#filter0_d)">
          <path
            d="M0 0H360V467C360 494.614 337.614 517 310 517H50C22.3858 517 0 494.614 0 467V0Z"
            fill="white"
          />
        </g>
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={360}
          height={235}
        >
          <rect width={360} height={235} fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M190.556 158.336C78.1397 116.975 62.0697 43.0741 68.0867 11.2937V-96L458.823 -82.9357C481.595 54.7485 513.476 313.828 458.823 248.674C390.507 167.231 331.077 210.037 190.556 158.336Z"
            fill="url(#paint0_linear)"
            fillOpacity={0.25}
          />
          <path
            d="M107.167 107.996C10.2778 93.3488 -15.9815 35.3139 -17 8.12743L54.1111 -59.284L396.056 -64C418.37 -31.9125 463 34.2598 463 42.2493C463 52.2361 443.556 227.839 425.778 232.277C408 236.716 333.556 220.071 286.889 199.82C240.222 179.569 228.278 126.305 107.167 107.996Z"
            fill="url(#paint1_linear)"
            fillOpacity={0.5}
          />
          <path
            d="M84.8963 77.798C32.2513 71.8081 -14.97 30.9326 -32 11.2436V-9L368.668 -4.28573C383.014 73.9157 404.542 228.821 375.887 222.831C340.069 215.344 316.19 166.815 256.492 125.773C196.795 84.7308 150.702 85.2854 84.8963 77.798Z"
            fill="url(#paint2_linear)"
          />
        </g>
        <path
          d="M42.0884 391.295V384.138H54.5581V417H46.5451V391.295H42.0884ZM59.824 400.119C59.824 394.957 60.8144 390.89 62.7951 387.919C64.8059 384.948 68.0321 383.462 72.4738 383.462C76.9155 383.462 80.1267 384.948 82.1074 387.919C84.1182 390.89 85.1236 394.957 85.1236 400.119C85.1236 405.341 84.1182 409.437 82.1074 412.408C80.1267 415.379 76.9155 416.865 72.4738 416.865C68.0321 416.865 64.8059 415.379 62.7951 412.408C60.8144 409.437 59.824 405.341 59.824 400.119ZM77.5607 400.119C77.5607 397.087 77.2306 394.762 76.5703 393.141C75.9101 391.49 74.5446 390.665 72.4738 390.665C70.403 390.665 69.0375 391.49 68.3772 393.141C67.717 394.762 67.3869 397.087 67.3869 400.119C67.3869 402.159 67.5069 403.855 67.747 405.206C67.9871 406.526 68.4673 407.606 69.1876 408.447C69.9378 409.257 71.0333 409.662 72.4738 409.662C73.9143 409.662 74.9947 409.257 75.715 408.447C76.4653 407.606 76.9605 406.526 77.2006 405.206C77.4407 403.855 77.5607 402.159 77.5607 400.119ZM48.9289 429.571C50.0393 429.571 51.0097 429.786 51.84 430.216C52.6803 430.636 53.3256 431.247 53.7757 432.047C54.2359 432.837 54.466 433.763 54.466 434.823C54.466 435.883 54.2359 436.804 53.7757 437.584C53.3256 438.364 52.6803 438.965 51.84 439.385C51.0097 439.795 50.0393 440 48.9289 440H45.5226V429.571H48.9289ZM48.9289 438.604C50.1494 438.604 51.0847 438.274 51.735 437.614C52.3852 436.954 52.7103 436.024 52.7103 434.823C52.7103 433.613 52.3852 432.667 51.735 431.987C51.0847 431.307 50.1494 430.967 48.9289 430.967H47.2333V438.604H48.9289ZM62.4488 437.869H58.0821L57.3319 440H55.5462L59.2826 429.556H61.2633L64.9997 440H63.1991L62.4488 437.869ZM61.9686 436.474L60.273 431.627L58.5623 436.474H61.9686ZM74.3523 429.571L70.901 436.219V440H69.1903V436.219L65.724 429.571H67.6297L70.0456 434.688L72.4615 429.571H74.3523ZM79.1461 440.105C78.4458 440.105 77.8156 439.985 77.2554 439.745C76.6952 439.495 76.255 439.145 75.9349 438.695C75.6148 438.244 75.4547 437.719 75.4547 437.119H77.2854C77.3254 437.569 77.5005 437.939 77.8106 438.229C78.1307 438.519 78.5759 438.664 79.1461 438.664C79.7363 438.664 80.1965 438.524 80.5266 438.244C80.8567 437.954 81.0218 437.584 81.0218 437.134C81.0218 436.784 80.9168 436.499 80.7067 436.279C80.5066 436.059 80.2515 435.888 79.9414 435.768C79.6413 435.648 79.2211 435.518 78.6809 435.378C78.0007 435.198 77.4455 435.018 77.0153 434.838C76.5951 434.648 76.235 434.358 75.9349 433.968C75.6348 433.578 75.4847 433.057 75.4847 432.407C75.4847 431.807 75.6348 431.282 75.9349 430.832C76.235 430.381 76.6552 430.036 77.1954 429.796C77.7356 429.556 78.3608 429.436 79.0711 429.436C80.0814 429.436 80.9068 429.691 81.547 430.201C82.1972 430.701 82.5574 431.392 82.6274 432.272H80.7367C80.7067 431.892 80.5266 431.567 80.1965 431.297C79.8664 431.027 79.4312 430.892 78.891 430.892C78.4008 430.892 78.0007 431.017 77.6905 431.267C77.3804 431.517 77.2254 431.877 77.2254 432.347C77.2254 432.667 77.3204 432.932 77.5105 433.142C77.7106 433.342 77.9606 433.503 78.2608 433.623C78.5609 433.743 78.971 433.873 79.4912 434.013C80.1815 434.203 80.7417 434.393 81.1719 434.583C81.612 434.773 81.9822 435.068 82.2823 435.468C82.5924 435.858 82.7475 436.384 82.7475 437.044C82.7475 437.574 82.6024 438.074 82.3123 438.544C82.0322 439.015 81.617 439.395 81.0668 439.685C80.5266 439.965 79.8864 440.105 79.1461 440.105Z"
          fill={props.evSolidColor ? props.evSolidColor : "#FF9900"}
        />
        <path
          d="M114.709 400.119C114.709 394.957 115.7 390.89 117.681 387.919C119.691 384.948 122.918 383.462 127.359 383.462C131.801 383.462 135.012 384.948 136.993 387.919C139.004 390.89 140.009 394.957 140.009 400.119C140.009 405.341 139.004 409.437 136.993 412.408C135.012 415.379 131.801 416.865 127.359 416.865C122.918 416.865 119.691 415.379 117.681 412.408C115.7 409.437 114.709 405.341 114.709 400.119ZM132.446 400.119C132.446 397.087 132.116 394.762 131.456 393.141C130.796 391.49 129.43 390.665 127.359 390.665C125.288 390.665 123.923 391.49 123.263 393.141C122.602 394.762 122.272 397.087 122.272 400.119C122.272 402.159 122.392 403.855 122.632 405.206C122.873 406.526 123.353 407.606 124.073 408.447C124.823 409.257 125.919 409.662 127.359 409.662C128.8 409.662 129.88 409.257 130.6 408.447C131.351 407.606 131.846 406.526 132.086 405.206C132.326 403.855 132.446 402.159 132.446 400.119ZM167.215 390.845H153.169V397.057C153.77 396.397 154.61 395.857 155.69 395.437C156.771 395.017 157.941 394.807 159.202 394.807C161.453 394.807 163.313 395.317 164.784 396.337C166.284 397.358 167.38 398.678 168.07 400.299C168.76 401.919 169.105 403.675 169.105 405.566C169.105 409.077 168.115 411.868 166.134 413.939C164.154 415.98 161.363 417 157.761 417C155.36 417 153.274 416.595 151.504 415.785C149.733 414.944 148.368 413.789 147.407 412.318C146.447 410.848 145.922 409.152 145.832 407.231H153.35C153.53 408.162 153.965 408.942 154.655 409.572C155.345 410.172 156.291 410.473 157.491 410.473C158.902 410.473 159.952 410.022 160.642 409.122C161.333 408.222 161.678 407.021 161.678 405.521C161.678 404.05 161.318 402.925 160.597 402.144C159.877 401.364 158.827 400.974 157.446 400.974C156.426 400.974 155.585 401.229 154.925 401.739C154.265 402.219 153.83 402.865 153.62 403.675H146.192V384.093H167.215V390.845ZM125.837 429.571V440H124.127V435.438H119.22V440H117.509V429.571H119.22V434.043H124.127V429.571H125.837ZM132.846 440.105C131.876 440.105 130.981 439.88 130.16 439.43C129.35 438.97 128.705 438.334 128.224 437.524C127.754 436.704 127.519 435.783 127.519 434.763C127.519 433.743 127.754 432.827 128.224 432.017C128.705 431.207 129.35 430.576 130.16 430.126C130.981 429.666 131.876 429.436 132.846 429.436C133.827 429.436 134.722 429.666 135.532 430.126C136.353 430.576 136.998 431.207 137.468 432.017C137.938 432.827 138.173 433.743 138.173 434.763C138.173 435.783 137.938 436.704 137.468 437.524C136.998 438.334 136.353 438.97 135.532 439.43C134.722 439.88 133.827 440.105 132.846 440.105ZM132.846 438.619C133.536 438.619 134.152 438.464 134.692 438.154C135.232 437.834 135.652 437.384 135.952 436.804C136.263 436.214 136.418 435.533 136.418 434.763C136.418 433.993 136.263 433.317 135.952 432.737C135.652 432.157 135.232 431.712 134.692 431.402C134.152 431.092 133.536 430.937 132.846 430.937C132.156 430.937 131.541 431.092 131.001 431.402C130.46 431.712 130.035 432.157 129.725 432.737C129.425 433.317 129.275 433.993 129.275 434.763C129.275 435.533 129.425 436.214 129.725 436.804C130.035 437.384 130.46 437.834 131.001 438.154C131.541 438.464 132.156 438.619 132.846 438.619ZM141.552 429.571V436.219C141.552 437.009 141.757 437.604 142.167 438.004C142.588 438.404 143.168 438.604 143.908 438.604C144.658 438.604 145.239 438.404 145.649 438.004C146.069 437.604 146.279 437.009 146.279 436.219V429.571H147.99V436.189C147.99 437.039 147.805 437.759 147.434 438.349C147.064 438.94 146.569 439.38 145.949 439.67C145.329 439.96 144.643 440.105 143.893 440.105C143.143 440.105 142.458 439.96 141.837 439.67C141.227 439.38 140.742 438.94 140.382 438.349C140.022 437.759 139.842 437.039 139.842 436.189V429.571H141.552ZM155.634 440L153.233 435.828H151.928V440H150.217V429.571H153.818C154.619 429.571 155.294 429.711 155.844 429.991C156.404 430.271 156.819 430.646 157.09 431.117C157.37 431.587 157.51 432.112 157.51 432.692C157.51 433.373 157.31 433.993 156.909 434.553C156.519 435.103 155.914 435.478 155.094 435.678L157.675 440H155.634ZM151.928 434.463H153.818C154.459 434.463 154.939 434.303 155.259 433.983C155.589 433.663 155.754 433.232 155.754 432.692C155.754 432.152 155.594 431.732 155.274 431.432C154.954 431.122 154.469 430.967 153.818 430.967H151.928V434.463ZM163.134 440.105C162.434 440.105 161.804 439.985 161.244 439.745C160.683 439.495 160.243 439.145 159.923 438.695C159.603 438.244 159.443 437.719 159.443 437.119H161.274C161.314 437.569 161.489 437.939 161.799 438.229C162.119 438.519 162.564 438.664 163.134 438.664C163.725 438.664 164.185 438.524 164.515 438.244C164.845 437.954 165.01 437.584 165.01 437.134C165.01 436.784 164.905 436.499 164.695 436.279C164.495 436.059 164.24 435.888 163.93 435.768C163.63 435.648 163.209 435.518 162.669 435.378C161.989 435.198 161.434 435.018 161.004 434.838C160.583 434.648 160.223 434.358 159.923 433.968C159.623 433.578 159.473 433.057 159.473 432.407C159.473 431.807 159.623 431.282 159.923 430.832C160.223 430.381 160.643 430.036 161.184 429.796C161.724 429.556 162.349 429.436 163.059 429.436C164.07 429.436 164.895 429.691 165.535 430.201C166.185 430.701 166.546 431.392 166.616 432.272H164.725C164.695 431.892 164.515 431.567 164.185 431.297C163.855 431.027 163.419 430.892 162.879 430.892C162.389 430.892 161.989 431.017 161.679 431.267C161.369 431.517 161.214 431.877 161.214 432.347C161.214 432.667 161.309 432.932 161.499 433.142C161.699 433.342 161.949 433.503 162.249 433.623C162.549 433.743 162.959 433.873 163.479 434.013C164.17 434.203 164.73 434.393 165.16 434.583C165.6 434.773 165.97 435.068 166.271 435.468C166.581 435.858 166.736 436.384 166.736 437.044C166.736 437.574 166.591 438.074 166.301 438.544C166.02 439.015 165.605 439.395 165.055 439.685C164.515 439.965 163.875 440.105 163.134 440.105Z"
          fill={props.evSolidColor ? props.evSolidColor : "#FF9900"}
        />
        <path
          d="M195.803 393.411C195.923 390.2 196.973 387.724 198.954 385.983C200.934 384.243 203.62 383.372 207.012 383.372C209.263 383.372 211.183 383.762 212.774 384.543C214.395 385.323 215.61 386.388 216.42 387.739C217.261 389.089 217.681 390.605 217.681 392.286C217.681 394.266 217.186 395.887 216.195 397.148C215.205 398.378 214.049 399.218 212.729 399.668V399.849C214.44 400.419 215.79 401.364 216.78 402.685C217.771 404.005 218.266 405.701 218.266 407.772C218.266 409.632 217.831 411.283 216.961 412.723C216.12 414.134 214.875 415.244 213.224 416.055C211.604 416.865 209.668 417.27 207.417 417.27C203.816 417.27 200.934 416.385 198.774 414.614C196.643 412.843 195.517 410.172 195.397 406.601H202.87C202.9 407.922 203.275 408.972 203.996 409.752C204.716 410.503 205.766 410.878 207.147 410.878C208.317 410.878 209.218 410.548 209.848 409.887C210.508 409.197 210.838 408.297 210.838 407.186C210.838 405.746 210.373 404.71 209.443 404.08C208.542 403.42 207.087 403.09 205.076 403.09H203.636V396.832H205.076C206.607 396.832 207.837 396.577 208.767 396.067C209.728 395.527 210.208 394.582 210.208 393.231C210.208 392.151 209.908 391.31 209.308 390.71C208.707 390.11 207.882 389.81 206.832 389.81C205.691 389.81 204.836 390.155 204.266 390.845C203.726 391.535 203.41 392.391 203.32 393.411H195.803ZM222.519 410.833C223.539 410.022 224.004 409.647 223.914 409.707C226.855 407.276 229.166 405.281 230.847 403.72C232.558 402.159 233.998 400.524 235.168 398.813C236.339 397.102 236.924 395.437 236.924 393.816C236.924 392.586 236.639 391.625 236.069 390.935C235.499 390.245 234.643 389.9 233.503 389.9C232.362 389.9 231.462 390.335 230.802 391.205C230.172 392.046 229.856 393.246 229.856 394.807H222.429C222.489 392.256 223.029 390.125 224.049 388.414C225.1 386.704 226.465 385.443 228.146 384.633C229.856 383.822 231.747 383.417 233.818 383.417C237.389 383.417 240.075 384.333 241.876 386.163C243.707 387.994 244.622 390.38 244.622 393.321C244.622 396.532 243.527 399.518 241.336 402.279C239.145 405.01 236.354 407.681 232.963 410.292H245.117V416.55H222.519V410.833ZM218.101 429.571V440H216.391V432.857L213.21 440H212.024L208.828 432.857V440H207.117V429.571H208.963L212.624 437.749L216.271 429.571H218.101ZM222.06 429.571V440H220.35V429.571H222.06ZM232.875 440H231.164L226.017 432.212V440H224.306V429.556H226.017L231.164 437.329V429.556H232.875V440Z"
          fill={props.evSolidColor ? props.evSolidColor : "#FF9900"}
        />
        <path
          d="M296.461 390.845H282.415V397.057C283.016 396.397 283.856 395.857 284.936 395.437C286.017 395.017 287.187 394.807 288.448 394.807C290.699 394.807 292.559 395.317 294.03 396.337C295.53 397.358 296.626 398.678 297.316 400.299C298.006 401.919 298.351 403.675 298.351 405.566C298.351 409.077 297.361 411.868 295.38 413.939C293.4 415.98 290.609 417 287.007 417C284.606 417 282.521 416.595 280.75 415.785C278.979 414.944 277.614 413.789 276.653 412.318C275.693 410.848 275.168 409.152 275.078 407.231H282.596C282.776 408.162 283.211 408.942 283.901 409.572C284.591 410.172 285.537 410.473 286.737 410.473C288.148 410.473 289.198 410.022 289.888 409.122C290.579 408.222 290.924 407.021 290.924 405.521C290.924 404.05 290.564 402.925 289.843 402.144C289.123 401.364 288.073 400.974 286.692 400.974C285.672 400.974 284.831 401.229 284.171 401.739C283.511 402.219 283.076 402.865 282.866 403.675H275.438V384.093H296.461V390.845ZM323.579 389.9L312.279 417H304.401L315.836 390.755H301.835V384.183H323.579V389.9ZM288.97 440.135C288.32 440.135 287.735 440.02 287.215 439.79C286.705 439.55 286.299 439.23 285.999 438.83C285.699 438.419 285.539 437.964 285.519 437.464H287.29C287.32 437.814 287.485 438.109 287.785 438.349C288.095 438.579 288.48 438.695 288.94 438.695C289.421 438.695 289.791 438.604 290.051 438.424C290.321 438.234 290.456 437.994 290.456 437.704C290.456 437.394 290.306 437.164 290.006 437.014C289.716 436.864 289.251 436.699 288.61 436.519C287.99 436.349 287.485 436.184 287.095 436.024C286.705 435.863 286.364 435.618 286.074 435.288C285.794 434.958 285.654 434.523 285.654 433.983C285.654 433.543 285.784 433.142 286.044 432.782C286.304 432.412 286.675 432.122 287.155 431.912C287.645 431.702 288.205 431.597 288.835 431.597C289.776 431.597 290.531 431.837 291.101 432.317C291.681 432.787 291.992 433.433 292.032 434.253H290.321C290.291 433.883 290.141 433.588 289.871 433.367C289.601 433.147 289.236 433.037 288.775 433.037C288.325 433.037 287.98 433.122 287.74 433.292C287.5 433.463 287.38 433.688 287.38 433.968C287.38 434.188 287.46 434.373 287.62 434.523C287.78 434.673 287.975 434.793 288.205 434.883C288.435 434.963 288.775 435.068 289.226 435.198C289.826 435.358 290.316 435.523 290.696 435.693C291.086 435.853 291.421 436.094 291.701 436.414C291.982 436.734 292.127 437.159 292.137 437.689C292.137 438.159 292.007 438.579 291.746 438.95C291.486 439.32 291.116 439.61 290.636 439.82C290.166 440.03 289.611 440.135 288.97 440.135ZM301.563 435.663C301.563 435.973 301.543 436.254 301.503 436.504H295.185C295.235 437.164 295.481 437.694 295.921 438.094C296.361 438.494 296.901 438.695 297.541 438.695C298.462 438.695 299.112 438.309 299.492 437.539H301.338C301.088 438.299 300.633 438.925 299.972 439.415C299.322 439.895 298.512 440.135 297.541 440.135C296.751 440.135 296.041 439.96 295.411 439.61C294.79 439.25 294.3 438.75 293.94 438.109C293.59 437.459 293.415 436.709 293.415 435.858C293.415 435.008 293.585 434.263 293.925 433.623C294.275 432.972 294.76 432.472 295.381 432.122C296.011 431.772 296.731 431.597 297.541 431.597C298.322 431.597 299.017 431.767 299.627 432.107C300.237 432.447 300.713 432.927 301.053 433.548C301.393 434.158 301.563 434.863 301.563 435.663ZM299.777 435.123C299.767 434.493 299.542 433.988 299.102 433.608C298.662 433.227 298.117 433.037 297.466 433.037C296.876 433.037 296.371 433.227 295.951 433.608C295.531 433.978 295.281 434.483 295.2 435.123H299.777ZM302.676 435.858C302.676 435.008 302.846 434.263 303.186 433.623C303.536 432.972 304.017 432.472 304.627 432.122C305.237 431.772 305.937 431.597 306.728 431.597C307.728 431.597 308.553 431.837 309.204 432.317C309.864 432.787 310.309 433.463 310.539 434.343H308.693C308.543 433.933 308.303 433.613 307.973 433.383C307.643 433.152 307.228 433.037 306.728 433.037C306.027 433.037 305.467 433.287 305.047 433.788C304.637 434.278 304.432 434.968 304.432 435.858C304.432 436.749 304.637 437.444 305.047 437.944C305.467 438.444 306.027 438.695 306.728 438.695C307.718 438.695 308.373 438.259 308.693 437.389H310.539C310.299 438.229 309.849 438.9 309.189 439.4C308.528 439.89 307.708 440.135 306.728 440.135C305.937 440.135 305.237 439.96 304.627 439.61C304.017 439.25 303.536 438.75 303.186 438.109C302.846 437.459 302.676 436.709 302.676 435.858Z"
          fill={props.evSolidColor ? props.evSolidColor : "#FF9900"}
        />
        <text
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 30,
            lineHeight: 1.25,
            fontFamily: "Roboto",
            letterSpacing: 0,
            wordSpacing: 0,
            textAnchor: "middle",
            fill: props.evSolidColor ? props.evSolidColor : "#333333",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.5696398,
          }}
          x="151.52249"
          y="320.32397"
          id="text4700"
        >
          <tspan
            id="tspan4698"
            x="151.52249"
            y="320.32397"
            style={{
              strokeWidth: 0.5696398,
              fill: props.evSolidColor ? props.evSolidColor : "#333333",
              fillOpacity: 1,
            }}
          >
            {props.evName ? props.evName : "AWS Community Day"}
          </tspan>
        </text>
        <rect x={43} y={194} width={89} height={88} fill="url(#pattern0)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M313.844 562H311.031V563.25H308.219C305.889 563.25 304 564.929 304 567V583.25C304 585.321 305.889 587 308.219 587H327.906C330.236 587 332.125 585.321 332.125 583.25V567C332.125 564.929 330.236 563.25 327.906 563.25H325.094V562H322.281V563.25H313.844V562ZM322.281 565.75H313.844V568.25H311.031V565.75H308.219C307.442 565.75 306.813 566.31 306.813 567V569.5H329.313V567C329.313 566.31 328.683 565.75 327.906 565.75H325.094V568.25H322.281V565.75ZM306.813 572H329.313V583.25C329.313 583.94 328.683 584.5 327.906 584.5H308.219C307.442 584.5 306.813 583.94 306.813 583.25V572ZM311.031 574.5H313.844V577H311.031V574.5ZM319.469 574.5H316.656V577H319.469V574.5ZM322.281 574.5H325.094V577H322.281V574.5ZM325.094 579.5H322.281V582H325.094V579.5Z"
          fill="white"
        />
        <path
          d="M301.196 605.296H297.704L297.104 607H295.676L298.664 598.648H300.248L303.236 607H301.796L301.196 605.296ZM300.812 604.18L299.456 600.304L298.088 604.18H300.812ZM310.571 601.06C310.355 600.644 310.055 600.332 309.671 600.124C309.287 599.908 308.843 599.8 308.339 599.8C307.787 599.8 307.295 599.924 306.863 600.172C306.431 600.42 306.091 600.772 305.843 601.228C305.603 601.684 305.483 602.212 305.483 602.812C305.483 603.412 305.603 603.944 305.843 604.408C306.091 604.864 306.431 605.216 306.863 605.464C307.295 605.712 307.787 605.836 308.339 605.836C309.083 605.836 309.687 605.628 310.151 605.212C310.615 604.796 310.899 604.232 311.003 603.52H307.871V602.428H312.467V603.496C312.379 604.144 312.147 604.74 311.771 605.284C311.403 605.828 310.919 606.264 310.319 606.592C309.727 606.912 309.067 607.072 308.339 607.072C307.555 607.072 306.839 606.892 306.191 606.532C305.543 606.164 305.027 605.656 304.643 605.008C304.267 604.36 304.079 603.628 304.079 602.812C304.079 601.996 304.267 601.264 304.643 600.616C305.027 599.968 305.543 599.464 306.191 599.104C306.847 598.736 307.563 598.552 308.339 598.552C309.227 598.552 310.015 598.772 310.703 599.212C311.399 599.644 311.903 600.26 312.215 601.06H310.571ZM315.184 599.764V602.212H318.064V603.328H315.184V605.884H318.424V607H313.816V598.648H318.424V599.764H315.184ZM326.961 607H325.593L321.477 600.772V607H320.109V598.648H321.477L325.593 604.864V598.648H326.961V607ZM331.481 598.66C332.369 598.66 333.145 598.832 333.809 599.176C334.481 599.512 334.997 600 335.357 600.64C335.725 601.272 335.909 602.012 335.909 602.86C335.909 603.708 335.725 604.444 335.357 605.068C334.997 605.692 334.481 606.172 333.809 606.508C333.145 606.836 332.369 607 331.481 607H328.757V598.66H331.481ZM331.481 605.884C332.457 605.884 333.205 605.62 333.725 605.092C334.245 604.564 334.505 603.82 334.505 602.86C334.505 601.892 334.245 601.136 333.725 600.592C333.205 600.048 332.457 599.776 331.481 599.776H330.125V605.884H331.481ZM342.293 605.296H338.801L338.201 607H336.773L339.761 598.648H341.345L344.333 607H342.893L342.293 605.296ZM341.909 604.18L340.553 600.304L339.185 604.18H341.909Z"
          fill="white"
        />
        <path
          d="M40.7797 596.66V605H39.4117V599.288L36.8677 605H35.9197L33.3637 599.288V605H31.9957V596.66H33.4717L36.3997 603.2L39.3157 596.66H40.7797ZM43.9457 597.764V600.212H46.8257V601.328H43.9457V603.884H47.1857V605H42.5777V596.648H47.1857V597.764H43.9457ZM55.7227 605H54.3547L50.2387 598.772V605H48.8707V596.648H50.2387L54.3547 602.864V596.648H55.7227V605ZM58.8751 596.66V601.976C58.8751 602.608 59.0391 603.084 59.3671 603.404C59.7031 603.724 60.1671 603.884 60.7591 603.884C61.3591 603.884 61.8231 603.724 62.1511 603.404C62.4871 603.084 62.6551 602.608 62.6551 601.976V596.66H64.0231V601.952C64.0231 602.632 63.8751 603.208 63.5791 603.68C63.2831 604.152 62.8871 604.504 62.3911 604.736C61.8951 604.968 61.3471 605.084 60.7471 605.084C60.1471 605.084 59.5991 604.968 59.1031 604.736C58.6151 604.504 58.2271 604.152 57.9391 603.68C57.6511 603.208 57.5071 602.632 57.5071 601.952V596.66H58.8751Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.3332 573.5L42.8835 563.887H53.984L59.534 573.5L53.9838 583.113H42.8835L37.3332 573.5ZM41.2169 561H55.6506L62.8674 573.5L55.6506 586H41.2169L34 573.5L41.2169 561ZM50.476 569.962H46.3911L44.3485 573.5L46.3911 577.037H50.476L52.5186 573.5L50.476 569.962Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x={-10}
          y={-6}
          width={380}
          height={537}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0" transform="scale(0.011236 0.0113636)" />
        </pattern>
        <linearGradient
          id="paint0_linear"
          x1={466.321}
          y1={-24.5636}
          x2={108.91}
          y2={-32.3323}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
          <stop
            offset={1}
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1={442.722}
          y1={22.5529}
          x2={160.016}
          y2={115.151}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
          <stop
            offset={1}
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1={192.5}
          y1={3}
          x2={190.476}
          y2={193}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
          <stop
            offset={1}
            stopColor={props.evSolidColor ? props.evSolidColor : "#FF9900"}
          />
        </linearGradient>
        <clipPath id="clip0">
          <rect width={360} height={640} fill="white" />
        </clipPath>
        <image
          id="image0"
          width={89}
          height={88}
          xlinkHref={
            !props.evLogo
              ? `data:image/png;base64,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`
              : props.evLogo
          }
        />
      </defs>
    </svg>
  )
}

export default Graphic