import { shallowMount, Wrapper } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard'
import { ECharacterStatus } from '~/models/character-status.enum'

describe('CharacterCard', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(CharacterCard, {
      propsData: {
        character: {
          char_id: 1,
          name: 'Name',
          birthday: '01/01/1001',
          occupation: ['Meth dealer'],
          img: 'http://avatar.fr',
          status: ECharacterStatus.Deceased,
          nickname: 'Padre',
          appearance: [1, 2 , 3, 4, 5],
          portrayed: 'Brad Pitt',
          category: 'Breaking Bad',
          better_call_saul_appearance: [],
        },
      },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  describe('computed nameClass method', () => {
    test('is equal to is-dead', () => {
      expect(wrapper.find(".is-dead").exists()).toBe(true);
    })
  })
})
