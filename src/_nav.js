import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilDescription, cilPeople } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Profil Mahasiwa',
    to: '/profilmahasiswa',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavGroup,
    name: 'Pendaftaran',
    to: '/pendaftaran',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Pendaftaran',
        to: '/formpendaftaran',
      },
      {
        component: CNavItem,
        name: 'Status Pendaftaran',
        to: '/status',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Dosen Pembimbing',
    to: '/dosen',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
]

export default _nav
