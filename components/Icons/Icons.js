import { createIcon } from "@chakra-ui/icons";



export const SupportIcon = createIcon({
    // Doesn't display the full icon without w and h being specified
    displayName: "SupportIcon",
    viewBox: "0 0 24 24",
    path: (
      <path
        fill="currentColor"
        d="M20.885 5.547a.703.703 0 00-1.122-.176l-2.7 2.702a.708.708 0 01-.995 0l-1.167-1.169a.702.702 0 010-.994l2.689-2.69a.704.704 0 00-.21-1.138c-2.031-.908-4.566-.435-6.164 1.152-1.358 1.348-1.763 3.455-1.11 5.78a.698.698 0 01-.197.703L2.593 16.4a2.82 2.82 0 103.981 3.983l6.754-7.332a.699.699 0 01.693-.2 7.885 7.885 0 002.03.279c1.469 0 2.757-.475 3.686-1.39 1.72-1.695 1.983-4.57 1.148-6.192zM4.623 19.901a1.407 1.407 0 11-.305-2.797 1.407 1.407 0 01.305 2.797z"
      />
    ),
  });

  export const HideIcon = createIcon({
    displayName: "HideIcon",
    viewBox: "0 0 24 24",
  
    path: (
      <g fill="none">
        <path
          d="M4.52235 21.9749L6.04773 20.4535C4.37751 18.9472 3.06521 17.0835 2.20761 14.9999C4.37301 9.56781 10.3465 5.35709 16 5.35709C17.4549 5.37638 18.8966 5.63703 20.2668 6.12852L21.9202 4.45709C20.0457 3.66137 18.035 3.23925 16 3.21423C12.5231 3.34556 9.16077 4.49733 6.32849 6.52718C3.4962 8.55704 1.31816 11.376 0.0635481 14.6357C-0.0211827 14.8711 -0.0211827 15.1288 0.0635481 15.3642C1.01104 17.8896 2.53875 20.1546 4.52235 21.9749Z"
          fill="#6C5DD3"
        />
        <path
          d="M11.7332 14.7106C11.8073 13.6839 12.247 12.7183 12.9717 11.9904C13.6964 11.2625 14.6577 10.8209 15.6799 10.7464L17.6107 8.79636C16.5288 8.51023 15.3911 8.51395 14.3111 8.80714C13.2311 9.10034 12.2465 9.67277 11.4554 10.4674C10.6643 11.262 10.0944 12.2509 9.8025 13.3357C9.5106 14.4205 9.5069 15.5633 9.79177 16.6499L11.7332 14.7106Z"
          fill="#6C5DD3"
        />
        <path
          d="M31.9364 14.6357C30.7133 11.4356 28.585 8.66467 25.8136 6.66429L30.9337 1.51071L29.4297 0L1.06616 28.4893L2.57021 30L8.01037 24.5357C10.4359 25.965 13.1882 26.7401 16 26.7857C19.4768 26.6544 22.8392 25.5026 25.6715 23.4728C28.5038 21.4429 30.6818 18.6239 31.9364 15.3643C32.0212 15.1289 32.0212 14.8711 31.9364 14.6357ZM20.2667 15C20.2623 15.7501 20.0618 16.4859 19.6855 17.1338C19.3092 17.7817 18.7701 18.3191 18.1223 18.6922C17.4744 19.0653 16.7404 19.2611 15.9935 19.2599C15.2467 19.2588 14.5133 19.0608 13.8666 18.6857L19.6694 12.8571C20.0529 13.5061 20.2589 14.2453 20.2667 15ZM16 24.6429C13.7621 24.6036 11.5666 24.0229 9.59976 22.95L12.3092 20.2286C13.5416 21.0875 15.0352 21.4843 16.5292 21.3498C18.0232 21.2153 19.4227 20.5579 20.4834 19.4926C21.544 18.4272 22.1985 17.0215 22.3324 15.5209C22.4663 14.0202 22.0712 12.52 21.2161 11.2821L24.2775 8.20714C26.7252 9.89462 28.6392 12.2522 29.7924 15C27.627 20.4321 21.6535 24.6429 16 24.6429Z"
          fill="#6C5DD3"
        />
      </g>
    )
  });
  
  
  export const ShowIcon = createIcon({
    displayName: "ShowIcon",
    viewBox: "0 0 24 24",
  
    path: (
      <g fill="none">
        <path
          d="M37.9245 14.5364C36.4347 10.3877 33.8483 6.79993 30.4849 4.21648C27.1216 1.63303 23.1288 0.167145 19 0C14.8712 0.167145 10.8784 1.63303 7.51506 4.21648C4.15173 6.79993 1.56531 10.3877 0.0754633 14.5364C-0.0251544 14.836 -0.0251544 15.164 0.0754633 15.4636C1.56531 19.6123 4.15173 23.2001 7.51506 25.7835C10.8784 28.367 14.8712 29.8329 19 30C23.1288 29.8329 27.1216 28.367 30.4849 25.7835C33.8483 23.2001 36.4347 19.6123 37.9245 15.4636C38.0252 15.164 38.0252 14.836 37.9245 14.5364ZM19 27.2727C12.2865 27.2727 5.19294 21.9136 2.62154 15C5.19294 8.08636 12.2865 2.72727 19 2.72727C25.7135 2.72727 32.8071 8.08636 35.3785 15C32.8071 21.9136 25.7135 27.2727 19 27.2727Z"
          fill="#6C5DD3"
        />
        <path
          d="M19 6.81812C17.4968 6.81812 16.0274 7.29797 14.7775 8.197C13.5277 9.09603 12.5536 10.3739 11.9783 11.8689C11.4031 13.3639 11.2526 15.009 11.5458 16.5961C11.8391 18.1832 12.5629 19.6411 13.6258 20.7854C14.6887 21.9296 16.043 22.7088 17.5173 23.0245C18.9916 23.3402 20.5197 23.1782 21.9085 22.5589C23.2972 21.9397 24.4842 20.891 25.3193 19.5455C26.1545 18.2 26.6002 16.6181 26.6002 14.9999C26.6002 12.83 25.7995 10.7489 24.3742 9.21451C22.9488 7.68013 21.0157 6.81812 19 6.81812ZM19 20.4545C17.9979 20.4545 17.0183 20.1346 16.185 19.5352C15.3518 18.9359 14.7024 18.084 14.3189 17.0873C13.9354 16.0906 13.835 14.9939 14.0305 13.9358C14.226 12.8777 14.7086 11.9058 15.4172 11.143C16.1258 10.3802 17.0286 9.86066 18.0115 9.6502C18.9944 9.43973 20.0131 9.54775 20.939 9.96059C21.8648 10.3734 22.6561 11.0726 23.2129 11.9696C23.7696 12.8665 24.0668 13.9211 24.0668 14.9999C24.0668 16.4466 23.533 17.834 22.5828 18.8569C21.6326 19.8798 20.3438 20.4545 19 20.4545Z"
          fill="#6C5DD3"
        />
      </g>
    )
  });
  
  export const LogoutIcon = createIcon({
    displayName: "LogoutIcon",
    viewBox: "0 0 24 24",
  
    path: (
      <g fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M11 20C11 19.4477 11.4477 19 12 19L15.2 19C16.0566 19 16.6389 18.9992 17.089 18.9624C17.5274 18.9266 17.7516 18.8617 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C18.8617 17.7516 18.9266 17.5274 18.9624 17.089C18.9992 16.6389 19 16.0566 19 15.2L19 8.8C19 7.94342 18.9992 7.36113 18.9624 6.91104C18.9266 6.47262 18.8617 6.24842 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.7516 5.1383 17.5274 5.07337 17.089 5.03755C16.6389 5.00078 16.0566 5 15.2 5L12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3L15.2413 3C16.0463 2.99999 16.7106 2.99998 17.2518 3.04419C17.8139 3.09012 18.3306 3.18868 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66937 20.9099 6.18608 20.9558 6.74817C21 7.28937 21 7.95374 21 8.75872V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H12C11.4477 21 11 20.5523 11 20Z" fill="currentColor"/>
        <path d="M7.70711 14.2929C8.09763 14.6834 8.09763 15.3166 7.70711 15.7071C7.31658 16.0976 6.68342 16.0976 6.29289 15.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289C8.09763 8.68342 8.09763 9.31658 7.70711 9.70711L6.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H6.41421L7.70711 14.2929Z" fill="currentColor"/>
      </g>
    )
  });
  
  
  export const PasswordLock = createIcon({
    displayName: "PasswordLock",
    viewBox: "0 0 24 24",
    path: (
      <g fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V11H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V11H8V6Z" fill="#12131A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.7587 9H14.2413C15.0463 8.99999 15.7106 8.99998 16.2518 9.04419C16.8139 9.09012 17.3306 9.18868 17.816 9.43597C18.5686 9.81947 19.1805 10.4314 19.564 11.184C19.8113 11.6694 19.9099 12.1861 19.9558 12.7482C20 13.2894 20 13.9537 20 14.7587V16.2413C20 17.0463 20 17.7106 19.9558 18.2518C19.9099 18.8139 19.8113 19.3306 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564C17.3306 21.8113 16.8139 21.9099 16.2518 21.9558C15.7106 22 15.0463 22 14.2413 22H9.75873C8.95374 22 8.28938 22 7.74818 21.9558C7.18608 21.9099 6.66937 21.8113 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.816C4.18868 19.3306 4.09012 18.8139 4.04419 18.2518C3.99998 17.7106 3.99999 17.0463 4 16.2413V14.7587C3.99999 13.9537 3.99998 13.2894 4.04419 12.7482C4.09012 12.1861 4.18868 11.6694 4.43597 11.184C4.81947 10.4314 5.43139 9.81947 6.18404 9.43597C6.66937 9.18868 7.18608 9.09012 7.74817 9.04419C8.28937 8.99998 8.95373 8.99999 9.7587 9ZM7.91104 11.0376C7.47262 11.0734 7.24842 11.1383 7.09202 11.218C6.7157 11.4097 6.40973 11.7157 6.21799 12.092C6.1383 12.2484 6.07337 12.4726 6.03755 12.911C6.00078 13.3611 6 13.9434 6 14.8V16.2C6 17.0566 6.00078 17.6389 6.03755 18.089C6.07337 18.5274 6.1383 18.7516 6.21799 18.908C6.40973 19.2843 6.7157 19.5903 7.09202 19.782C7.24842 19.8617 7.47262 19.9266 7.91104 19.9624C8.36113 19.9992 8.94342 20 9.8 20H14.2C15.0566 20 15.6389 19.9992 16.089 19.9624C16.5274 19.9266 16.7516 19.8617 16.908 19.782C17.2843 19.5903 17.5903 19.2843 17.782 18.908C17.8617 18.7516 17.9266 18.5274 17.9624 18.089C17.9992 17.6389 18 17.0566 18 16.2V14.8C18 13.9434 17.9992 13.3611 17.9624 12.911C17.9266 12.4726 17.8617 12.2484 17.782 12.092C17.5903 11.7157 17.2843 11.4097 16.908 11.218C16.7516 11.1383 16.5274 11.0734 16.089 11.0376C15.6389 11.0008 15.0566 11 14.2 11H9.8C8.94342 11 8.36113 11.0008 7.91104 11.0376Z" fill="#12131A"/>
        <path d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16Z" fill="#12131A"/>
      </g>
    ),
  });


  export const EmailIcon = createIcon({
    displayName: "EmailIcon",
    viewBox: "0 0 24 24",
    path: (
      <g fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.7587 4H16.2413C17.0463 3.99999 17.7106 3.99998 18.2518 4.04419C18.8139 4.09012 19.3306 4.18868 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8113 6.66937 21.9099 7.18608 21.9558 7.74817C22 8.28936 22 8.95372 22 9.75868V14.2413C22 15.0463 22 15.7106 21.9558 16.2518C21.9099 16.8139 21.8113 17.3306 21.564 17.816C21.1805 18.5686 20.5686 19.1805 19.816 19.564C19.3306 19.8113 18.8139 19.9099 18.2518 19.9558C17.7106 20 17.0463 20 16.2413 20H7.75872C6.95374 20 6.28938 20 5.74817 19.9558C5.18608 19.9099 4.66937 19.8113 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43597 17.816C2.18868 17.3306 2.09012 16.8139 2.04419 16.2518C1.99998 15.7106 1.99999 15.0463 2 14.2413V9.7587C1.99999 8.95373 1.99998 8.28937 2.04419 7.74818C2.09012 7.18608 2.18868 6.66937 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C4.66937 4.18868 5.18608 4.09012 5.74817 4.04419C6.28937 3.99998 6.95373 3.99999 7.7587 4ZM5.91104 6.03755C5.47262 6.07337 5.24842 6.1383 5.09202 6.21799C4.7157 6.40973 4.40973 6.7157 4.21799 7.09202C4.1383 7.24842 4.07337 7.47262 4.03755 7.91104C4.00078 8.36113 4 8.94342 4 9.8V14.2C4 15.0566 4.00078 15.6389 4.03755 16.089C4.07337 16.5274 4.1383 16.7516 4.21799 16.908C4.40973 17.2843 4.7157 17.5903 5.09202 17.782C5.24842 17.8617 5.47262 17.9266 5.91104 17.9624C6.36113 17.9992 6.94342 18 7.8 18H16.2C17.0566 18 17.6389 17.9992 18.089 17.9624C18.5274 17.9266 18.7516 17.8617 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C19.8617 16.7516 19.9266 16.5274 19.9624 16.089C19.9992 15.6389 20 15.0566 20 14.2V9.8C20 8.94342 19.9992 8.36113 19.9624 7.91104C19.9266 7.47262 19.8617 7.24842 19.782 7.09202C19.5903 6.7157 19.2843 6.40973 18.908 6.21799C18.7516 6.1383 18.5274 6.07337 18.089 6.03755C17.6389 6.00078 17.0566 6 16.2 6H7.8C6.94342 6 6.36113 6.00078 5.91104 6.03755Z" fill="#12131A"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.17548 8.43441C6.4879 7.97898 7.11036 7.86305 7.56578 8.17548L11.4344 10.8293C11.7753 11.0632 12.2249 11.0632 12.5658 10.8294L16.4344 8.17548C16.8898 7.86305 17.5123 7.97898 17.8247 8.43441C18.1371 8.88983 18.0212 9.51229 17.5658 9.82471L13.6972 12.4786C12.6745 13.1801 11.3257 13.1801 10.303 12.4786L6.43441 9.82471C5.97898 9.51229 5.86305 8.88983 6.17548 8.43441Z" fill="#12131A"/>
      </g>
    ),
  });

  export const StatsIcon = createIcon({
    displayName: "StatsIcon",
    viewBox: "0 0 24 24",
    path: (
      <path
        fill="currentColor"
        d="M4.57 22.297H3.164a1.055 1.055 0 01-1.055-1.054v-6.328a1.055 1.055 0 011.055-1.055H4.57a1.055 1.055 0 011.055 1.055v6.328a1.055 1.055 0 01-1.055 1.054zM14.414 22.296h-1.406a1.055 1.055 0 01-1.055-1.055V10.695a1.055 1.055 0 011.055-1.055h1.406a1.055 1.055 0 011.055 1.055V21.24a1.055 1.055 0 01-1.055 1.055zM19.336 22.297H17.93a1.055 1.055 0 01-1.055-1.055V5.773A1.055 1.055 0 0117.93 4.72h1.406a1.055 1.055 0 011.055 1.054v15.47a1.055 1.055 0 01-1.055 1.054zM9.492 22.297H8.086a1.055 1.055 0 01-1.055-1.055V2.257a1.055 1.055 0 011.055-1.054h1.406a1.055 1.055 0 011.055 1.054v18.985a1.055 1.055 0 01-1.055 1.055z"
      />
    ),
  });
  
  export const WalletIcon = createIcon({
    displayName: "WalletIcon",
    viewBox: "0 0 24 24",
    path: (
      <g>
        <path
          fill="currentColor"
          d="M4.447 4.818h14.062c.164 0 .328.01.491.031a2.9 2.9 0 00-3.406-2.441L4.03 4.382h-.013a2.9 2.9 0 00-1.805 1.149 3.848 3.848 0 012.236-.713zM18.51 5.875H4.446a2.816 2.816 0 00-2.813 2.812v8.438a2.816 2.816 0 002.813 2.812h14.062a2.815 2.815 0 002.813-2.812V8.687a2.815 2.815 0 00-2.813-2.812zm-2.088 8.437a1.406 1.406 0 110-2.811 1.406 1.406 0 010 2.811z"
        />
        <path
          fill="currentColor"
          d="M1.656 11.651V7.28c0-.952.528-2.549 2.358-2.895 1.553-.291 3.091-.291 3.091-.291s1.011.703.176.703-.813 1.077 0 1.077 0 1.032 0 1.032L4.007 10.62l-2.35 1.032z"
        />
      </g>
    ),
  });

  export const ProfileIcon = createIcon({
    displayName: "ProfileIcon",
    viewBox: "0 0 24 24",
    path: (
      <g>
        <path d="M0 0h24v24H0V0z" fill="transparent" />
        <path
          fill="currentColor"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
        />
      </g>
    ),
  });


  export const Hamburger = createIcon({
    displayName: "Hamburger",
    viewBox: "0 0 22 20",
    path: (
      <path d="M0 1H22M22 19H0M22 10H0" stroke="currentColor" strokeWidth="2"/>
    ),
  });
  
  
  export const ContestLogo = createIcon({
    displayName: "ContestLogo",
    viewBox: "0 0 24 24",
    path: (
      <g fill="none">
       <path d="M15.7161 16.2236H8.49609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.7161 12.0371H8.49609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2521 7.86035H8.49707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.909 2.75C15.909 2.75 8.23198 2.754 8.21998 2.754C5.45998 2.771 3.75098 4.587 3.75098 7.357V16.553C3.75098 19.337 5.47298 21.16 8.25698 21.16C8.25698 21.16 15.933 21.157 15.946 21.157C18.706 21.14 20.416 19.323 20.416 16.553V7.357C20.416 4.573 18.693 2.75 15.909 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  
      </g>
    ),
  });


  export const AddIcon = createIcon({
    displayName: "AddIcon",
    viewBox: "0 0 12 12",
  
    path: (
      <g>
        <path d="M6 0V12" stroke="currentColor" strokeWidth="2" />
        <path d="M0 5.94214H12" stroke="currentColor" strokeWidth="2" />
      </g>
    )
  });
  
  export const MinusIcon = createIcon({
    displayName: "MinusIcon",
    viewBox: "0 0 12 2",
  
    path: (
      <g>
        <path d="M0 1H12" stroke="currentColor" strokeWidth="2" />
      </g>
    )
  });