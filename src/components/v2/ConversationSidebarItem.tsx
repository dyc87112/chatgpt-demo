import { currentChatId, deleteChatById } from '@/stores/chat'
import type { ChatInstance } from '@/stores/chat'

interface Props {
  instance: ChatInstance & {
    current: boolean
  }
}

export default ({ instance }: Props) => {
  const handleClick = () => {
    currentChatId.set(instance.id)
  }
  const handleDelete = (chatId: string) => {
    deleteChatById(chatId)
  }
  const handleEdit = (chatId: string) => {}

  return (
    <div
      class={[
        'group flex items-center h-18 px-4 gap-4 border-b border-l-4 border-b-base hv-base',
        instance.current ? 'border-l-emerald-500' : 'border-l-transparent',
      ].join(' ')}
      onClick={handleClick}
    >
      <div class="w-8 h-8 rounded-full bg-white/50" />
      <div class="flex-1">{ instance.name }</div>
      <div class="hidden group-hover:block">
        <div
          class="inline-flex p-2 items-center gap-1 rounded-md hv-base"
          onClick={() => handleEdit(instance.id)}
        >
          <div class="i-carbon-edit" />
        </div>
        <div
          class="inline-flex p-2 items-center gap-1 rounded-md hv-base"
          onClick={() => handleDelete(instance.id)}
        >
          <div class="i-carbon-close" />
        </div>
      </div>
    </div>
  )
}