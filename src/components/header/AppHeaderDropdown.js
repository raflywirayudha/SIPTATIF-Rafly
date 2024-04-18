import React, { useState } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react'
import { cilSettings, cilUser, cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import fotoProfil from './../../assets/images/avatars/sjw.jpeg'

const AppHeaderDropdown = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleLogout = () => {
    // Menampilkan modal konfirmasi
    setModalVisible(true)
  }

  const handleLogoutConfirm = () => {
    // Lakukan proses logout di sini
    // Setelah logout, Anda bisa mengarahkan pengguna ke halaman login atau yang lain
    // Contoh: window.location.href = '/login';

    // Sembunyikan modal setelah logout
    setModalVisible(false)
  }

  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar src={fotoProfil} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>

          <CDropdownDivider />
          <CDropdownItem onClick={handleLogout}>
            <CIcon icon={cilAccountLogout} className="me-2" />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CModal alignment="center" visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Konfirmasi Logout</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Anda yakin ingin logout?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Batal
          </CButton>
          <CButton color="primary" onClick={handleLogoutConfirm}>
            Logout
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AppHeaderDropdown
