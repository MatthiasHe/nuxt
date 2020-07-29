import { mount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard'
import { ECharacterStatus } from '~/models/character-status.enum'

describe('CharacterCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CharacterCard, {
      propsData: {
        character: {
          char_id: 1,
          name: 'Name',
          birthday: '01/01/1001',
          occupation: ['Meth dealer'],
          img: 'http://avatar.fr',
          status: ECharacterStatus.Alive,
          nickname: 'Padre',
          appearance: [1, 2 , 3, 4, 5],
          portrayed: 'Brad Pitt',
          category: 'Breaking Bad',
          better_call_saul_appearance: [],
        },
      },
    })
    
    expect(wrapper.vm).toBeTruthy()
  })
})
