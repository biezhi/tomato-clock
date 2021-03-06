import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

import {
  remote
} from 'electron'

const isDev = process.env.NODE_ENV === 'development'

const DB = {
  install (Vue, options) {
    if (!options) {
      options = {
        name: 'db.json'
      }
    }

    let dbPath
    if (isDev) {
      dbPath = options.name
    } else {
      dbPath = path.join(remote.app.getPath('userData'), options.name)
    }

    const adapter = new FileSync(dbPath)
    const db = lowdb(adapter)

    // init database
    if (!db.has('setting').value()) {
      db.defaults({
        tomatos: [],
        setting: {
          'work_mins': 25,
          'sleep_mins': 5,
          'is_play_sound': true,
          'is_dock_icon': false
        }
      }).write()
    } else {
      if (db.get('setting').get('is_dock_icon').value()) {
        remote.app.dock.show()
      }
    }

    Vue.prototype.$db = db
  }
}

export default DB
