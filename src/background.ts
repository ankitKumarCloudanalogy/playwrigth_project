/**
 * Provides access to the background configuration information needed to run the tests. These are set via environment variables.
 * File:  .env
 */
export class Background {
    static readonly ENVIRONMENT = process.env.ENVIRONMENT as string
    static readonly STANDARD_TIMEOUT = parseInt(process.env.STANDARD_TIMEOUT || '')

    static SD_BASE_URL: string
    static NUMBEROF_ITEMS: number

    static initialize() {
        if (Background.ENVIRONMENT === 'QA') {
            Background.SD_BASE_URL = process.env.SD_BASE_URL_QA as string
        } else if (Background.ENVIRONMENT === 'UAT') {
            Background.SD_BASE_URL = process.env.SD_BASE_URL_UAT as string
        } else if (Background.ENVIRONMENT === 'PROD') {
            Background.SD_BASE_URL = process.env.SD_BASE_URL_PROD as string
        } else {
            Background.NUMBEROF_ITEMS = parseInt(process.env.STANDARD_TIMEOUT || '')
        }
    }
}

Background.initialize()
