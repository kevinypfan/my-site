import Image from 'next/image'

interface LangButtonProps {
  t: (key: string) => string
  handleLinkClick: (locale: string) => void
  locale: string
  lang: string
}

const LangButton: React.FC<LangButtonProps> = ({ t, handleLinkClick, locale, lang }) => (
  <button
    className="group flex flex-row items-center py-2 hover:bg-primary-600 hover:text-white"
    onClick={() => handleLinkClick(locale)}
  >
    <span className="ml-4 mr-2 w-10 rounded-md bg-white px-1 text-white group-hover:bg-primary-600 group-hover:text-primary-500 dark:bg-black">
      <Image
        src={`/static/flags/${locale}.svg`}
        alt={locale}
        width={30}
        height={26}
        className="rounded"
      />
    </span>
    <div>{t(lang)}</div>
  </button>
)

export default LangButton
