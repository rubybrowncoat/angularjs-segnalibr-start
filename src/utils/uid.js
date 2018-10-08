class UidGenerator {
  constructor(prefix = '', suffix = '') {
    this.prefix = prefix
    this.suffix = suffix

    this.uids = {}
  }

  generate() {
    while (true) {
      let head = (Math.random() * 46656) | 0
      let tail = (Math.random() * 46656) | 0

      head = ('000' + head.toString(36)).slice(-3)
      tail = ('000' + head.toString(36)).slice(-3)

      const uid = this.prefix + head + tail + this.suffix

      if (!this.uids.hasOwnProperty(uid)) {
        this.uids[uid] = true

        return uid
      }
    }
  }
}

export default UidGenerator
