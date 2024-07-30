import {http} from '@/utils/http'
import type {AddressParams, AddressItem} from '@/types/address'

export const postMemberAddressAPI = (data:AddressParams)=>{
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getMemberAddressAPI = ()=>{
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

export const getMemberAddressByIdAPI = (id: string)=>{
  // 获取一个收货地址，不需要写数组
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

export const putMemberAddressByIdAPI = (id: string, data:AddressParams)=>{
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}
