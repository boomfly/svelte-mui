<style>
  :global(:root) {
    /* common */
    --theme-colors-common-black: #000;
    --theme-colors-common-white: #fff;
    
    /* red */
    --theme-colors-red-50: #ffebee;
    --theme-colors-red-100: #ffcdd2;
    --theme-colors-red-200: #ef9a9a;
    --theme-colors-red-300: #e57373;
    --theme-colors-red-400: #ef5350;
    --theme-colors-red-500: #f44336;
    --theme-colors-red-600: #e53935;
    --theme-colors-red-700: #d32f2f;
    --theme-colors-red-800: #c62828;
    --theme-colors-red-900: #b71c1c;
    --theme-colors-red-A100: #ff8a80;
    --theme-colors-red-A200: #ff5252;
    --theme-colors-red-A400: #ff1744;
    --theme-colors-red-A700: #d50000;

    /* pink */
    --theme-colors-pink-50: #fce4ec;
    --theme-colors-pink-100: #f8bbd0;
    --theme-colors-pink-200: #f48fb1;
    --theme-colors-pink-300: #f06292;
    --theme-colors-pink-400: #ec407a;
    --theme-colors-pink-500: #e91e63;
    --theme-colors-pink-600: #d81b60;
    --theme-colors-pink-700: #c2185b;
    --theme-colors-pink-800: #ad1457;
    --theme-colors-pink-900: #880e4f;
    --theme-colors-pink-A100: #ff80ab;
    --theme-colors-pink-A200: #ff4081;
    --theme-colors-pink-A400: #f50057;
    --theme-colors-pink-A700: #c51162;

    /* purple */
    --theme-colors-purple-50: #f3e5f5;
    --theme-colors-purple-100: #e1bee7;
    --theme-colors-purple-200: #ce93d8;
    --theme-colors-purple-300: #ba68c8;
    --theme-colors-purple-400: #ab47bc;
    --theme-colors-purple-500: #9c27b0;
    --theme-colors-purple-600: #8e24aa;
    --theme-colors-purple-700: #7b1fa2;
    --theme-colors-purple-800: #6a1b9a;
    --theme-colors-purple-900: #4a148c;
    --theme-colors-purple-A100: #ea80fc;
    --theme-colors-purple-A200: #e040fb;
    --theme-colors-purple-A400: #d500f9;
    --theme-colors-purple-A700: #aa00ff;

    /* deepPurple */
    --theme-colors-deepPurple-50: #ede7f6;
    --theme-colors-deepPurple-100: #d1c4e9;
    --theme-colors-deepPurple-200: #b39ddb;
    --theme-colors-deepPurple-300: #9575cd;
    --theme-colors-deepPurple-400: #7e57c2;
    --theme-colors-deepPurple-500: #673ab7;
    --theme-colors-deepPurple-600: #5e35b1;
    --theme-colors-deepPurple-700: #512da8;
    --theme-colors-deepPurple-800: #4527a0;
    --theme-colors-deepPurple-900: #311b92;
    --theme-colors-deepPurple-A100: #b388ff;
    --theme-colors-deepPurple-A200: #7c4dff;
    --theme-colors-deepPurple-A400: #651fff;
    --theme-colors-deepPurple-A700: #6200ea;

    /* indigo */
    --theme-colors-indigo-50: #e8eaf6;
    --theme-colors-indigo-100: #c5cae9;
    --theme-colors-indigo-200: #9fa8da;
    --theme-colors-indigo-300: #7986cb;
    --theme-colors-indigo-400: #5c6bc0;
    --theme-colors-indigo-500: #3f51b5;
    --theme-colors-indigo-600: #3949ab;
    --theme-colors-indigo-700: #303f9f;
    --theme-colors-indigo-800: #283593;
    --theme-colors-indigo-900: #1a237e;
    --theme-colors-indigo-A100: #8c9eff;
    --theme-colors-indigo-A200: #536dfe;
    --theme-colors-indigo-A400: #3d5afe;
    --theme-colors-indigo-A700: #304ffe;

    /* blue */
    --theme-colors-blue-50: #e3f2fd;
    --theme-colors-blue-100: #bbdefb;
    --theme-colors-blue-200: #90caf9;
    --theme-colors-blue-300: #64b5f6;
    --theme-colors-blue-400: #42a5f5;
    --theme-colors-blue-500: #2196f3;
    --theme-colors-blue-600: #1e88e5;
    --theme-colors-blue-700: #1976d2;
    --theme-colors-blue-800: #1565c0;
    --theme-colors-blue-900: #0d47a1;
    --theme-colors-blue-A100: #82b1ff;
    --theme-colors-blue-A200: #448aff;
    --theme-colors-blue-A400: #2979ff;
    --theme-colors-blue-A700: #2962ff;

    /* lightBlue */
    --theme-colors-lightBlue-50: #e1f5fe;
    --theme-colors-lightBlue-100: #b3e5fc;
    --theme-colors-lightBlue-200: #81d4fa;
    --theme-colors-lightBlue-300: #4fc3f7;
    --theme-colors-lightBlue-400: #29b6f6;
    --theme-colors-lightBlue-500: #03a9f4;
    --theme-colors-lightBlue-600: #039be5;
    --theme-colors-lightBlue-700: #0288d1;
    --theme-colors-lightBlue-800: #0277bd;
    --theme-colors-lightBlue-900: #01579b;
    --theme-colors-lightBlue-A100: #80d8ff;
    --theme-colors-lightBlue-A200: #40c4ff;
    --theme-colors-lightBlue-A400: #00b0ff;
    --theme-colors-lightBlue-A700: #0091ea;

    /* cyan */
    --theme-colors-cyan-50: #e0f7fa;
    --theme-colors-cyan-100: #b2ebf2;
    --theme-colors-cyan-200: #80deea;
    --theme-colors-cyan-300: #4dd0e1;
    --theme-colors-cyan-400: #26c6da;
    --theme-colors-cyan-500: #00bcd4;
    --theme-colors-cyan-600: #00acc1;
    --theme-colors-cyan-700: #0097a7;
    --theme-colors-cyan-800: #00838f;
    --theme-colors-cyan-900: #006064;
    --theme-colors-cyan-A100: #84ffff;
    --theme-colors-cyan-A200: #18ffff;
    --theme-colors-cyan-A400: #00e5ff;
    --theme-colors-cyan-A700: #00b8d4;

    /* teal */
    --theme-colors-teal-50: #e0f2f1;
    --theme-colors-teal-100: #b2dfdb;
    --theme-colors-teal-200: #80cbc4;
    --theme-colors-teal-300: #4db6ac;
    --theme-colors-teal-400: #26a69a;
    --theme-colors-teal-500: #009688;
    --theme-colors-teal-600: #00897b;
    --theme-colors-teal-700: #00796b;
    --theme-colors-teal-800: #00695c;
    --theme-colors-teal-900: #004d40;
    --theme-colors-teal-A100: #a7ffeb;
    --theme-colors-teal-A200: #64ffda;
    --theme-colors-teal-A400: #1de9b6;
    --theme-colors-teal-A700: #00bfa5;

    /* green */
    --theme-colors-green-50: #e8f5e9;
    --theme-colors-green-100: #c8e6c9;
    --theme-colors-green-200: #a5d6a7;
    --theme-colors-green-300: #81c784;
    --theme-colors-green-400: #66bb6a;
    --theme-colors-green-500: #4caf50;
    --theme-colors-green-600: #43a047;
    --theme-colors-green-700: #388e3c;
    --theme-colors-green-800: #2e7d32;
    --theme-colors-green-900: #1b5e20;
    --theme-colors-green-A100: #b9f6ca;
    --theme-colors-green-A200: #69f0ae;
    --theme-colors-green-A400: #00e676;
    --theme-colors-green-A700: #00c853;

    /* lightGreen */
    --theme-colors-lightGreen-50: #f1f8e9;
    --theme-colors-lightGreen-100: #dcedc8;
    --theme-colors-lightGreen-200: #c5e1a5;
    --theme-colors-lightGreen-300: #aed581;
    --theme-colors-lightGreen-400: #9ccc65;
    --theme-colors-lightGreen-500: #8bc34a;
    --theme-colors-lightGreen-600: #7cb342;
    --theme-colors-lightGreen-700: #689f38;
    --theme-colors-lightGreen-800: #558b2f;
    --theme-colors-lightGreen-900: #33691e;
    --theme-colors-lightGreen-A100: #ccff90;
    --theme-colors-lightGreen-A200: #b2ff59;
    --theme-colors-lightGreen-A400: #76ff03;
    --theme-colors-lightGreen-A700: #64dd17;

    /* lime */
    --theme-colors-lime-50: #f9fbe7;
    --theme-colors-lime-100: #f0f4c3;
    --theme-colors-lime-200: #e6ee9c;
    --theme-colors-lime-300: #dce775;
    --theme-colors-lime-400: #d4e157;
    --theme-colors-lime-500: #cddc39;
    --theme-colors-lime-600: #c0ca33;
    --theme-colors-lime-700: #afb42b;
    --theme-colors-lime-800: #9e9d24;
    --theme-colors-lime-900: #827717;
    --theme-colors-lime-A100: #f4ff81;
    --theme-colors-lime-A200: #eeff41;
    --theme-colors-lime-A400: #c6ff00;
    --theme-colors-lime-A700: #aeea00;

    /* yellow */
    --theme-colors-yellow-50: #fffde7;
    --theme-colors-yellow-100: #fff9c4;
    --theme-colors-yellow-200: #fff59d;
    --theme-colors-yellow-300: #fff176;
    --theme-colors-yellow-400: #ffee58;
    --theme-colors-yellow-500: #ffeb3b;
    --theme-colors-yellow-600: #fdd835;
    --theme-colors-yellow-700: #fbc02d;
    --theme-colors-yellow-800: #f9a825;
    --theme-colors-yellow-900: #f57f17;
    --theme-colors-yellow-A100: #ffff8d;
    --theme-colors-yellow-A200: #ffff00;
    --theme-colors-yellow-A400: #ffea00;
    --theme-colors-yellow-A700: #ffd600;

    /* amber */
    --theme-colors-amber-50: #fff8e1;
    --theme-colors-amber-100: #ffecb3;
    --theme-colors-amber-200: #ffe082;
    --theme-colors-amber-300: #ffd54f;
    --theme-colors-amber-400: #ffca28;
    --theme-colors-amber-500: #ffc107;
    --theme-colors-amber-600: #ffb300;
    --theme-colors-amber-700: #ffa000;
    --theme-colors-amber-800: #ff8f00;
    --theme-colors-amber-900: #ff6f00;
    --theme-colors-amber-A100: #ffe57f;
    --theme-colors-amber-A200: #ffd740;
    --theme-colors-amber-A400: #ffc400;
    --theme-colors-amber-A700: #ffab00;

    /* orange */
    --theme-colors-orange-50: #fff3e0;
    --theme-colors-orange-100: #ffe0b2;
    --theme-colors-orange-200: #ffcc80;
    --theme-colors-orange-300: #ffb74d;
    --theme-colors-orange-400: #ffa726;
    --theme-colors-orange-500: #ff9800;
    --theme-colors-orange-600: #fb8c00;
    --theme-colors-orange-700: #f57c00;
    --theme-colors-orange-800: #ef6c00;
    --theme-colors-orange-900: #e65100;
    --theme-colors-orange-A100: #ffd180;
    --theme-colors-orange-A200: #ffab40;
    --theme-colors-orange-A400: #ff9100;
    --theme-colors-orange-A700: #ff6d00;

    /* deepOrange */
    --theme-colors-deepOrange-50: #fbe9e7;
    --theme-colors-deepOrange-100: #ffccbc;
    --theme-colors-deepOrange-200: #ffab91;
    --theme-colors-deepOrange-300: #ff8a65;
    --theme-colors-deepOrange-400: #ff7043;
    --theme-colors-deepOrange-500: #ff5722;
    --theme-colors-deepOrange-600: #f4511e;
    --theme-colors-deepOrange-700: #e64a19;
    --theme-colors-deepOrange-800: #d84315;
    --theme-colors-deepOrange-900: #bf360c;
    --theme-colors-deepOrange-A100: #ff9e80;
    --theme-colors-deepOrange-A200: #ff6e40;
    --theme-colors-deepOrange-A400: #ff3d00;
    --theme-colors-deepOrange-A700: #dd2c00;

    /* brown */
    --theme-colors-brown-50: #efebe9;
    --theme-colors-brown-100: #d7ccc8;
    --theme-colors-brown-200: #bcaaa4;
    --theme-colors-brown-300: #a1887f;
    --theme-colors-brown-400: #8d6e63;
    --theme-colors-brown-500: #795548;
    --theme-colors-brown-600: #6d4c41;
    --theme-colors-brown-700: #5d4037;
    --theme-colors-brown-800: #4e342e;
    --theme-colors-brown-900: #3e2723;
    --theme-colors-brown-A100: #d7ccc8;
    --theme-colors-brown-A200: #bcaaa4;
    --theme-colors-brown-A400: #8d6e63;
    --theme-colors-brown-A700: #5d4037;

    /* grey */
    --theme-colors-grey-50: #fafafa;
    --theme-colors-grey-100: #f5f5f5;
    --theme-colors-grey-200: #eeeeee;
    --theme-colors-grey-300: #e0e0e0;
    --theme-colors-grey-400: #bdbdbd;
    --theme-colors-grey-500: #9e9e9e;
    --theme-colors-grey-600: #757575;
    --theme-colors-grey-700: #616161;
    --theme-colors-grey-800: #424242;
    --theme-colors-grey-900: #212121;
    --theme-colors-grey-A100: #d5d5d5;
    --theme-colors-grey-A200: #aaaaaa;
    --theme-colors-grey-A400: #303030;
    --theme-colors-grey-A700: #616161;

    /* blueGrey */
    --theme-colors-blueGrey-50: #eceff1;
    --theme-colors-blueGrey-100: #cfd8dc;
    --theme-colors-blueGrey-200: #b0bec5;
    --theme-colors-blueGrey-300: #90a4ae;
    --theme-colors-blueGrey-400: #78909c;
    --theme-colors-blueGrey-500: #607d8b;
    --theme-colors-blueGrey-600: #546e7a;
    --theme-colors-blueGrey-700: #455a64;
    --theme-colors-blueGrey-800: #37474f;
    --theme-colors-blueGrey-900: #263238;
    --theme-colors-blueGrey-A100: #cfd8dc;
    --theme-colors-blueGrey-A200: #b0bec5;
    --theme-colors-blueGrey-A400: #78909c;
    --theme-colors-blueGrey-A700: #455a64;
  }
</style>