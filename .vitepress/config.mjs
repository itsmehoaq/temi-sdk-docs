import { defineConfig } from 'vitepress'

export default defineConfig({
  Title: 'robotemi SDK',
  description: "Temi SDK is your way to develop skills for temi that take advantage of your robot's unique abilities!",
  themeConfig: {
    siteTitle: false,
    logo: { light: '../assets/logo_dark.svg', dark: '../assets/logo_dark.svg' },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'wiki/getting-started' }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Getting Started', link: 'wiki/getting-started' },
          { text: 'Install/Uninstall On Temi', link: 'wiki/install-uninstall' },
          { text: 'Robot API', link: 'wiki/robotAPI' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Follow', link: 'wiki/follow' },
          { text: 'Navigation & Map', link: 'wiki/location',
            items: [
              { text: 'Local Map Backup', link: 'wiki/localMap' },
            ]
          },
          { text: 'Movement', link: 'wiki/movement' },
          { text: 'Speech', link: 'wiki/speech' },
          { text: 'User & Telepresence', link: 'wiki/usersAndTelepresence' },
          { text: 'System', link: 'wiki/utils' },
        ]
      },
      {
        text: 'Advanced Features',
        items: [
          { text: 'Kiosk Mode', link: 'wiki/kioskMode' },
          { text: 'Detection & Interaction', link: 'wiki/detectionAndInteraction' },
          { text: 'Permission', link: 'wiki/permission' },
          { text: 'Face Recognition & Sequence', link: 'wiki/temiCenter',
              items: [{ text: 'Local Face Registration', link: 'wiki/localFace' }]
          },
          { text: 'Activity Stream', link: 'wiki/activityStream' },
        ]
      },
      {
        text: 'temi GO',
        items: [{ text: 'Serial Communication', link: 'wiki/serialComm' },]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/robotemi/sdk/' }
    ]
  }
})
