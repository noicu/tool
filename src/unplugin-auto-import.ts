type ImportNameAlias = [string, string]
type ImportsMap = Record<string, (string | ImportNameAlias)[]>

export default <ImportsMap>({
    '@tovicn/tool': [
      'range',
      'random',
      'randomArr',
      'randomDisrupt',
    ]
  })
