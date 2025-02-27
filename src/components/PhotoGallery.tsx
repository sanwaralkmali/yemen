import React, { useState } from 'react';
import { X } from 'lucide-react';

// Sample photo data - in a real app, this would come from your assets folder
const photos = [
  {
    id: 1,
    src: 'https://plus.unsplash.com/premium_photo-1670689707643-f36b72da4405?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Yemeni Flag',
    category: 'Yemeni flag'
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/736x/fc/8c/1c/fc8c1c4bc4108a15e7fa0ea50d78ba7b.jpg',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  },
  {
    id: 3,
    src: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480528057_937550701864395_6341600704020443735_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=egxgVhApGhEQ7kNvgFXOgd8&_nc_oc=AdiYBNqzKCP74eysIZABnphHS-t1VpFwyR-RoK3jGSWT6g7rdQUoq9OSUixx6O15746apHVe0xvr01tWhMzpxPUA&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AklS5yN19LPXrDrK0oaA0cl&oh=00_AYBG5dQIM1HZeBm9M4amVOELZioaXjR2qhzrEw_oEy7riw&oe=67C684EE',
    alt: 'Old buildings',
    category: 'Sana\'a'
  },
  {
    id: 4,
    src: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480888427_937545318531600_5422307359406453352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Xj_YpkfBOyoQ7kNvgGn3dLA&_nc_oc=AdiXOCE3kHX4eloe3Vq_tAKWvmKjjZpx76spWhFkgFyGvXhtP_260oeh5QHUkT7vnFQmtqWo-8k5tyQ3ZtKtEYl1&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AcFIkSCMlHjfe1xvvntPKmN&oh=00_AYAB-Yw7fqB5OW5fpOwRjSWimCUP2wpS8Ggt9S9YKGaLRw&oe=67C69FA7',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/736x/3e/b8/9c/3eb89ca92f50cc4c936a5c834893e972.jpg',
    alt: 'Jambiya',
    category: 'Clothing'
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/736x/98/28/cc/9828cc90aaf7044f8b296bc2a30e4fdc.jpg',
    alt: 'Yemeni Weman',
    category: 'Clothing'
  },
  {
    id: 7,
    src: 'https://i.pinimg.com/736x/7b/d4/38/7bd438206c71a75260456a45bb1efce3.jpg',
    alt: 'Jambiya',
    category: 'Clothing'
  },
  {
    id: 8,
    src: 'https://i.pinimg.com/736x/00/0f/51/000f5103899829bcb0d5594a40fe87d9.jpg',
    alt: 'Yemeni Food',
    category: 'Food'
  },
  {
    id: 9,
    src: 'https://i.pinimg.com/736x/9f/66/a3/9f66a3d7c05fbc93162db5a6055b8f1f.jpg',
    alt: 'Yemen',
    category: 'Clothing'
  }
  ,
  {
    id: 10,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/02_cut.jpg',
    alt: 'Socotra Island',
    category: 'Socotra'
  }
  ,
  {
    id: 11,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/03_cut.jpg',
    alt: 'Socotra Island',
    category: 'Socotra'
  }
  ,
  {
    id: 12,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2023/05/next-departures-01_cut.jpg',
    alt: 'Socotra',
    category: 'Socotra'
  },
  {
    id: 13,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2023/05/next-departures02_cut.jpg',
    alt: 'People of Yemen',
    category: 'Socotra'
  },
  {
    id: 14,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/01-4.jpg',
    alt: 'Red sea',
    category: 'Socotra'
  },
  {
    id: 15,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/03-2.jpg',
    alt: 'Yemen Nature',
    category: 'Socotra'
  },
  {
    id: 16,
    src: 'https://www.welcometosocotra.com/wp-content/uploads/2020/08/04-3-768x512.jpg',
    alt: 'Socotra Island',
    category: 'Socotra'
  }
  ,
  {
    id: 17,
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/cb/b2/a1/socotra-island.jpg?w=900&h=-1&s=1',
    alt: 'Socotra',
    category: 'Socotra'
  }
  ,
  {
    id: 18,
    src: 'https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/480552162_937545261864939_53801212804775848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KOujLeiHovgQ7kNvgHQPhL9&_nc_oc=AdiWPfzQtzQa22Wv0T3Le_uVTr16Wq0-DiOElqUENnJ4dw_KkGQk4klvEeRoUk0OBHWZI5V0keAz5pxK-YzpxvKY&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AHlxdZ7Lsdvin5fOMqS3mgI&oh=00_AYCOMU7iP3I_axXtmGorM3Y4FassTDN_Z2JwtBj8t4Mm5A&oe=67C6A9B8',
    alt: 'Taiz City', 
    category: 'Taiz'
  }
  ,
  {
    id: 19,
    src: 'https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480664472_936986708587461_6768056836326528719_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kIqXauuoQaAQ7kNvgF42UHK&_nc_oc=Adif14mmR0suvNzyC1j9d0pvpo15qKB8SEC3qwDcSTCC0w-p9NKRe_ZhMtz8c9hMDGlbmUiP86znD-bc4ckv4itR&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=A-vfP6N3EfatXtoetjCMev9&oh=00_AYA9q22MxDY0ug5Cns3_nbrsRxk00pPBL0lBhV1UgRdL4Q&oe=67C6B273',
    alt: 'Yemeni Flag',
    category: 'Yemeni Flag'
  }
  ,
  {
    id: 20,
    src: 'https://i.pinimg.com/736x/95/bd/b3/95bdb35514b89bbda87ed4abac338a8e.jpg',
    alt: 'Yemeni girls',
    category: 'Taiz'
  }
  ,
  {
    id: 21,
    src: 'https://scontent.fist20-1.fna.fbcdn.net/v/t39.30808-6/480783976_1100718481829232_4528252137738178694_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zt8brsVMTVgQ7kNvgFG3QYi&_nc_oc=AdjNOibRnvOB1_jVV8KzoVvR83VS1YKCTspNfHZuh9XgJg2rqF1gyR5Hdcuj-FvJ9K8&_nc_zt=23&_nc_ht=scontent.fist20-1.fna&_nc_gid=Ajdd68hBMwUQI2LydvPfUzC&oh=00_AYBdrMuP0j1QV2N8yVbTvmgKR7bPckOlGjyBICp7BUnR_A&oe=67C5DB54',
    alt: 'Yemeni girl',
    category: 'Clothing'
  }
  ,
  {
    id: 22,
    src: 'https://i.pinimg.com/736x/58/dd/ea/58ddeafaf7bcdeb192e143cacbf62a14.jpg',
    alt: 'Taiz City',
    category: 'Taiz'
  }
  ,
  {
    id: 23,
    src: 'https://i.pinimg.com/736x/97/05/89/9705894eaeb5e7a2b0069c1cfacbf22a.jpg',
    alt: 'Taiz City',
    category: 'Taiz'
  }
  ,
  {
    id: 24,
    src: 'https://i.pinimg.com/736x/a6/f4/4f/a6f44f58c271de2a32639d80c2d4da83.jpg',
    alt: 'Taiz City',
    category: 'Taiz'
  }
  ,
  {
    id: 25,
    src: 'https://i.pinimg.com/736x/69/46/7a/69467aec89876328709d666c2b614e90.jpg',
    alt: 'Yemeni nutural',
    category: 'Taiz'
  }
  ,
  {
    id: 26,
    src: 'https://i.pinimg.com/736x/0b/4b/73/0b4b73907f9cf9885bc245326c0df868.jpg',
    alt: 'Ibb City',
    category: 'Ibb'
  }
  ,
  {
    id: 27,
    src: 'https://i.pinimg.com/736x/2e/c5/58/2ec5583fba7d1970898da1f96a537c98.jpg',
    alt: 'Sanaa Old City',
    category: 'Sana\'a'
  }
  ,
  {
    id: 28,
    src: 'https://i.pinimg.com/736x/6d/b4/7e/6db47edb80a05c6c1b1a043d4141fa1f.jpg',
    alt: 'Old buildings',
    category: 'Sana\'a'
  },
  {
    id: 29,
    src: 'https://i.pinimg.com/736x/34/c5/58/34c558a535cd9fd963c09336fcecf5c6.jpg',
    alt: 'building',
    category: 'Sana\'a'
  },
  {
    id: 30,
    src: 'https://i.pinimg.com/736x/c7/c0/2f/c7c02f865362d43b699031796feffe6d.jpg',
    alt: 'Sana\'a',
    category: 'Sana\'a'
  },
  {
    id: 31,
    src: "https://i.pinimg.com/736x/0e/21/e6/0e21e6334bf54317b1c27f65ba7536f8.jpg",
    alt: "Cultural buildings",
    category: "Shibam"
  },
  {
    id: 32,
    src: "https://i.pinimg.com/736x/ba/10/8f/ba108f8873d5aa97cb382f66021e2cc1.jpg",
    alt: "Traditional Yemeni architecture blending with Nature",
    category: "Hadramout"
  },
  {
    id: 33,
    src: "https://i.pinimg.com/736x/b7/84/c2/b784c2ecf9869301604bd6e7cd365a1e.jpg",
    alt: "Aden city",
    category: "Aden"
  },
  {
    id: 34,
    src: "https://i.pinimg.com/736x/ff/b5/b8/ffb5b8bfec84ce231892d35f33ddb09b.jpg",
    alt: "A scenic view of Aden city",
    category: "Aden"
  },
  {
    id: 35,
    src: "https://i.pinimg.com/736x/37/47/37/37473738358a547af8b3796c9db359da.jpg",
    alt: "Old buildings in Shibam",
    category: "Clothing"
  },
  {
    id: 36,
    src: "https://i.pinimg.com/736x/c9/f5/8a/c9f58ab6fb6aeff57a67d95b73371f3b.jpg",
    alt: "Shehara Bridge, an iconic historical landmark in Yemen",
    category: "Shehara"
  },
  {
    "id": 37,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/480457122_1824449361703391_2354971476778171910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wvY9YoWadYgQ7kNvgGdXOTb&_nc_oc=AdieCaocayF9A44vQu9StCEVGCDFWsO-IwgUSpikUQ_RnspRHCH_XhdJpHYY5Q1XYMEDZE4LNVtWgbtDidGz8t6U&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AGfjmCn2wpvSP-LJwWTMqLt&oh=00_AYBVGcU1zkNV_va0umZIx5JhIVqbiPKzveA-4Zl18PBI_Q&oe=67C67C8A",
    "alt": "Yemeni coffee",
    "category": "Coffee"
  },
  {
    "id": 38,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/424972307_1569476337200696_1786384984043300778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ssjq49oIBA0Q7kNvgEQVOx3&_nc_oc=AdiSjcExSPhuc1Q2jqVoYJO_olTVaKxanozqkqi2b6yx68CoxoaXynB7mDCRb-uS9mXVx4UUJXObp2fhm0imQo69&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AHsg9WayrWexdvEwSRIO0SC&oh=00_AYBeicj8pNFHlWYhLpERkVQGvMs4OQ9Z8l6qHxxPIRDJ_A&oe=67C68FC3",
    "alt": "Nature",
    "category": "Taiz"
  },
  {
    "id": 39,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/416401579_1550505702431093_7536852384629327411_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q3fPLkxCUegQ7kNvgH3mRB9&_nc_oc=AdiO3HpX3dutyU8vyOFd9qlKPtcor4eLt4Uq0-WZGf_y8bUbN4wUQiQ85YTPk8UJq1jHFNcrFOvkfC1cPEEB-M69&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=ACxJPzGnbMvZw7xPpJCW2PE&oh=00_AYAPkY42kbsrfuxe337iLot5pI8hMVML_o7mIB5z45WIFg&oe=67C67D97",
    "alt": "Yemeni kids",
    "category": "People"
  },
  {
    "id": 40,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t1.6435-9/83093218_2250340621734284_566640103422689280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vL5ofHSdn08Q7kNvgETT31u&_nc_oc=AdhvMX2EX3rMMQIEjuf5ELVFbF-zqJPEE9CySzTFVwfNlKGJcbJ8eNoL2V4NWkrs5h5U-Umb6AmcNNt94ARMUeRC&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AYrGt2yMj2d6jIJ5CUuHrkl&oh=00_AYCX1ZACuRSTDNoKdMnSrXlz-bjMd9jKwta5RZGFnXDxGA&oe=67E82E14",
    "alt": "Sheba",
    "category": "Saba"
  },
  {
    "id": 41,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/475662055_922533796662378_905741587330300682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JzOPdl9_kcoQ7kNvgGdv-GD&_nc_oc=Adi3keHhNJBFreBsJDbir8pjR64JZZk7ww0BFhwYoCKAAuhboCbFdILMS66Hc0yAMkcGvPq8LLLzUGZNlPAEXebf&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=ASPK9C1hirpFz11yZl6dBcZ&oh=00_AYApvRVmKu27S14RbQH0VrTLHUM70VZcC_zhv4X_ETWdHg&oe=67C69A27",
    "alt": "Yemeni kid",
    "category": "People"
  },
  {
    "id": 42,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/475564217_922534039995687_3890162233571671186_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DrHKfwmIWGAQ7kNvgHa3m2t&_nc_oc=AdihM0l6VM11m7I0VQpwRc-XFppPNAjQWDiNSFN7WgNpIS50bSNdJFP-GvDWc7zeaCIUJVzwGGhw2QhWjZ0WElKG&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AW9sEruwWfCD5o7psfSjCKB&oh=00_AYARo8JvNqJzYTkHZ3LKMhpftBDH5sK52D1QXkp7kSY96A&oe=67C6A9C4",
    "alt": "Yemeni dance",
    "category": "Shibam"
  },
  {
    "id": 43,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t51.75761-15/464967374_17926848140967992_2848010544634995435_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Zo-yxPUYTiEQ7kNvgFqH1Kj&_nc_oc=AdiyFueXC__KLVXxgQpif2CBXpPmtxB6gwbGADRl5ryQQWjaD09rghiCej_a-kxVDTQUem3Jq5OsH8z1B_IhPtS3&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=A-tSFHYasDyDXrLbDOBdYct&oh=00_AYB-2tAtOTVrFfPVFJPtwR6CBiodJmX7950Ug_I0cD3XNw&oe=67C680B2",
    "alt": "Socotra Island",
    "category": "Socotra"
  },
  {
    "id": 44,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/475410755_921213263498139_2335181635582192727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7I3iHkJ2qfsQ7kNvgGY6BmE&_nc_oc=AdjjT-nDwwVZWcz6Q7laho1OjDZYtgFUhkBmRCsehyQxPwqpqTx5b7_x62t803XX8QKwrqspO2VQ78QKj9W9C_sm&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AaHPxRTJenqGS4g6e3z8jW7&oh=00_AYAqhLS3olOqM9B17EvOhkOmjvBiiibD2a4BUSMh5JaDTw&oe=67C6B096",
    "alt": "Nature",
    "category": "Socotra"
  },
  {
    "id": 45,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/474592967_921213006831498_8210955359195090167_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BN5VXUYpJyEQ7kNvgH51oit&_nc_oc=AdhdWbxHZ81w5yzZheALQwbE9K4T1b00p9OQtVSXgGmgBVKUEsNwflm4RrL5Dy-NNmnr7jTROvVGBLbThFntnzTD&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AVs3Jqqfq5rsvUsaNCdw1u2&oh=00_AYA4YcOrnAlp-P9zpDlb0uJshntGuta3i1FhCkwVnRS6xQ&oe=67C69400",
    "alt": "Yemen beauty",
    "category": "Socotra"
  },
  {
    "id": 46,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/474071227_921212933498172_8217301291591776058_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=54Y5Jy8B3AgQ7kNvgGUenpP&_nc_oc=Adjesig5E8Xh_I7bD2xXZ4YCi6ksdMDux-3hqUGaJjwbefTx8dg4kYg1QdA9H_pa_J_N2MDcFtVL2fZik_FVC4DY&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=A6IhHMZmE_UD7LXAs8WaV0M&oh=00_AYDmStScUpDFGCUFiBTlxNH_sJ84oHUF7CwZHL6Ga4GnYg&oe=67C67C2A",
    "alt": "Yemen beauty Nature",
    "category": "Socotra"
  },
  {
    "id": 47,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/474060455_916595623959903_1645789886960389619_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5p82rycmLWMQ7kNvgH3W-Is&_nc_oc=AdjLfoWcCqAtq7GTgQ1oKy8R1a2LREXVxHLgQpH6HQhcpgllxSaIbxS5Gh7A7W7SsT3sXx-C35t44j7xF7OizREt&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AT5S2dIX0sd04s87ho8v6YW&oh=00_AYDDRZJt2ywI2ok-vNAxae3k6V0mPKm7U_m0UPOjD2V84g&oe=67C6925C",
    "alt": "Yemeni art",
    "category": "Art"
  },
  {
    "id": 48,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/471199816_898940629058736_2784181461497819591_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m9qNVYqjDZsQ7kNvgGV3Gf2&_nc_oc=AdgUXFfJzadcSPthHq8HpyZlRlmJs1XZ1losyE5n_KK6uPT75oFG1ed4RxrzAUj6iJoGfGZZ_yPcya1D0sM51dtF&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=A8q4qHVe__vMH9QIGmkkiNY&oh=00_AYCKccCNEQtJYYUP5zs7kD4Yb16dyRSL4F5DjMHP3wlMZA&oe=67C6A135",
    "alt": "Yemeni passport",
    "category": "Yemeni flag"
  },
  {
    "id": 49,
    "src": "  https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480856564_937831971836268_7250752659512081643_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p7_rsrBCPxUQ7kNvgFDv7Jo&_nc_oc=AdgNpKfCO60B7wMqb-kqIVZBhz5f2b1fqs8gRjfVQC9G37iLb_4cStslDQTmnIbp4l4aatYQfWrcPMLpRnAG3Yui&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AhLaQJPY2MdjkLt5-qUOlPP&oh=00_AYCHT23g6wqRCceLdu6F4RsKIMTDfykftTgc9GzHohFwsQ&oe=67C68BB3",    
    "alt": "Old buildings",
    "category": "Hadramout"
  },
  {
    "id": 50,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/481114912_937832115169587_6313731230551505116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GXNLOLT8nawQ7kNvgHJgAoJ&_nc_oc=AdhY3zGKFIzVHtFS_2q9cwo4Mqwy_4B7rZxLxe-4bm6FH3pgnRi8BHxxB_DtmmWvPt0o8C5796yZgw7ydJCwUQjD&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AFclwpnliMS1c8m4I3-Bqyt&oh=00_AYCsFy11aromBS1ZLle3NWxdO40DJcpLw3hL2jvmyzfouw&oe=67C6846F",
    "alt": "Old buildings",
    "category": "Hadramout"
  },
  {
    "id": 51,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480550935_937593351860130_4969190582837234592_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KWPNKPWyMFEQ7kNvgFHqjqT&_nc_oc=AdhPDGbRrp3vQqwXZ92TMZzvlH5615Z31CieEal3kjYkLQG-3nobrgJGSIIGA_lAPuHd9yFXqB9MYpKo1BtmyX_8&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AcONrPV--XHo65HBDjcucGI&oh=00_AYDLKWzTax91Sk_aSaLNLrh3OqZK7TTfY2gP5rOYgrfzQw&oe=67C6B4F3",
    "alt": "Ibb",
    "category": "Ibb"
  },
  {
    "id": 52,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/481114912_937832115169587_6313731230551505116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GXNLOLT8nawQ7kNvgHJgAoJ&_nc_oc=AdhY3zGKFIzVHtFS_2q9cwo4Mqwy_4B7rZxLxe-4bm6FH3pgnRi8BHxxB_DtmmWvPt0o8C5796yZgw7ydJCwUQjD&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AFclwpnliMS1c8m4I3-Bqyt&oh=00_AYCsFy11aromBS1ZLle3NWxdO40DJcpLw3hL2jvmyzfouw&oe=67C6846F",
    "alt": "Taiz City",
    "category": "Taiz"
  },
  {
    "id": 53,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480604076_936977131921752_4048867569649889577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8EPpDSD4w1EQ7kNvgEixVBn&_nc_oc=AdjBnbyBCCR1QMb9hl5a5rFDeZu15zGYYOAgWNJwg_nC-MU0Su9B5smj0fmX5rFs8jcolYgZkQHgbHTAwcwUkCFI&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=Azji2-g4lbhK1SMdhbw55YA&oh=00_AYBnxZ1-SwybpYpIjfI1rwJxvjWTCRXWrDIakTxcEcCwag&oe=67C6AC53",
    "alt": "A stunning view of Aden at night with city lights",
    "category": "Aden"
  },
  {
    "id": 54,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480656776_936941421925323_2475451009137149415_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JTEGKhXmnEEQ7kNvgFLWMDb&_nc_oc=AdjxS4tLLEPkhcxQXGVXSw1OkjcqwHxonysgeR-YvFtnyWONMpOKvQYncztCcc11fMq_swAFyvVs7ck4B3gzDoUV&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AZvKZwwj6oDgs5gjET8_pDN&oh=00_AYB_COgX5PAx5Z80N0tg0FwMOy8zJk0xzBi4QVtuDQ5Sxg&oe=67C69130",
    "alt": "A group of Yemeni girls holding Quran",
    "category": "People"
  },
  {
    "id": 55,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/481052898_936277965325002_2403419754650812997_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qACz2RQm5HwQ7kNvgG5lqRP&_nc_oc=AdizI3ob6ZqnYrtMxVlJoXScMyeNU3ivo22Qz8Z1RI-ssWcpDE2MX2z8xRL3n_HCpYmurydKiIj102ricDoWvfgr&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=APNL66i_Pk9PxEmAVEp3Dr6&oh=00_AYDdGAsXmmA5hEfS2eLzHDmXfjJaKhg_i-90_0acfpLbGg&oe=67C6913E",
    "alt": "A beautiful view of Al Mukalla with its coastal landscape and cityscape",
    "category": "Al Mukalla"
  },
  {
    "id": 56,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480277776_936072305345568_4283642896499329044_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZyjpeJJ_eJAQ7kNvgGqU3mZ&_nc_oc=AdiRV0TUZtPLUQsKlhhCFnVPkZw6dnyGkkyX383U_oMWag4HQPWLITazUYqHh2Eu1eizzX5p96ongaD3DgRU1X52&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AVpxxp5-WQxSw0fvXArCIm5&oh=00_AYD_zoKBt439_0ccDabaxrfWeu_Zfb91xQJi7whjb2gkCA&oe=67C6B654",
    "alt": "The stunning beauty of Sana'a with its traditional architecture and scenic landscapes",
    "category": "Sana'a"
  },
  {
    "id": 57,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480556560_936070075345791_2791729834679669682_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7rivw8lJwWgQ7kNvgF0SFXV&_nc_oc=Adj4ImaEZ4ksa7LYmCFmLgHRV5Thsj4_xTv6VKflDHQRaJ2q-SgiuI5be-a1OsGx28u-cDzW91WSlj0CvSkNE3yi&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AnC20G0o38v2NQAyaGarsOe&oh=00_AYARscwzqLEhRDLpyCB6e0ATaZ7c7oqTZBq4gcJlQaEM4g&oe=67C68C9E",
    "alt": "A scenic view of Hajjah with its mountainous landscapes and traditional architecture",
    "category": "Hajjah"
  },
  {
    "id": 58,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480352988_936070092012456_1068084780462342150_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GJSSWIwucV4Q7kNvgEBDaoi&_nc_oc=AdiqU-_QCcNHDkIpk4JrbZ2OXXQziV8MMQwUMBhFwubfeD4bqw257Rcpm_ptlYW4gDD_x03jlFjROamFHJM-f7j9&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AdPzqyPY26pqOI90qzIgJYx&oh=00_AYChOed4XJEoQ4KbXBdVItgRlX3nAIyyM9DrKQ5nFPgX3g&oe=67C6AD22",
    "alt": "Yemeni girl",
    "category": "People"
  },
  {
    "id": 59,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480315413_936070125345786_8275854942685791414_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tt9HxBvuPaoQ7kNvgHG214N&_nc_oc=Adj5obyue5HZhIpIRQuVmofPTiIiYWEMr-8xYR80Y4v8FkJWnX3e_8aiCmGNEeKHI-grmD6lgwe7HkI5lEwl4gQS&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=A69jD2tdOS2lTUtBXXJ580s&oh=00_AYCT_Dfbg3uboeHKHy-hY576VnNenKbilLc_vM97Y6q4Nw&oe=67C6BEA3",
    "alt": "A view of the city of Al Mukalla with its coastal landscape and buildings",
    "category": "Al Mukalla"
  },
  {
    "id": 60,
    "src": "https://scontent-ist1-2.xx.fbcdn.net/v/t39.30808-6/480566074_936069922012473_3944270033549850784_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=r4sn33zuggsQ7kNvgFE3Eeh&_nc_oc=AdgJjoLiSvIo8g0wIVWE_T5u7Whb0pynpJoBx6DoLbSYHmAMcow11Njmhdnr1MHteN5OwmPjY8dJeChKSRqMSDrV&_nc_zt=23&_nc_ht=scontent-ist1-2.xx&_nc_gid=AMRgkT0mV_7ZesQo1ZDbFbE&oh=00_AYBOr2yxiSM3QpHkTrfd5Oj80-YByYOpOmE2tfqxDwk1uQ&oe=67C6A258",
    "alt": "A scenic view of the ancient ruins of Sheba, reflecting the rich history of Yemen",
    "category": "Saba"
  },

  {
    "id": 61,
    "src": "https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/480306661_935725888713543_3672792176702589755_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p1NzdlgO3PIQ7kNvgEvFWod&_nc_oc=AdjBxD4fVP9Q3DPGXCfJfsN7Yf5WgICOKSsPFgkg5Kqx1b-x9_VbKiGE0UF0FT5OEQ_2Xxdu0spvJVMa5u_Q7ib7&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=AGMsXd7WiaehPBSrenthS1R&oh=00_AYATXdRHFz_jeFxVHbZFjKIuehOQf3WZGFD7pwAQ2EeE_Q&oe=67C6BB6C",
    "alt": "A scenic view of Sana'a showcasing the traditional architecture and cultural heritage",
    "category": "Sana'a"
  },
  {
    "id": 62,
    "src": "https://i.pinimg.com/736x/bf/6d/02/bf6d02d331f7c5048785026663166907.jpg",
    "alt": "Yemeni food - Sossi",
    "category": "Food"
  },
  {
    "id": 63,
    "src": "https://i.pinimg.com/736x/73/25/46/732546849ae7c5ef06dd522393564e59.jpg",
    "alt": "A Yemeni girl wearing traditional clothing, showcasing the rich cultural attire",
    "category": "Yemeni girl, Clothing"
  }
  
];

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(photos.map(photo => photo.category)))];
  
  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === filter);
  
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === category 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id}
            className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-white font-medium">{photo.alt}</p>
                <p className="text-gray-300 text-sm">{photo.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedPhoto.src} 
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-xl">{selectedPhoto.alt}</p>
            <p className="text-gray-400">{selectedPhoto.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};