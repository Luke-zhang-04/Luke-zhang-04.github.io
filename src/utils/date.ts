/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

/**
 * Calculates elapsed time between current and previous
 *
 * @param start - Start time
 * @param end - End time. If none given, start becomes Date.now(), and end becomes start
 * @returns Time difference
 */
export const timeDifference = (start: number, end?: number) => {
    const minute = 60
    const minsPerHour = 60
    const msPerSecond = 1000
    const hoursPerDay = 24
    const daysPerMonth = 30
    const daysPerYear = 365

    const msPerMinute = minute * msPerSecond
    const msPerHour = msPerMinute * minsPerHour
    const msPerDay = msPerHour * hoursPerDay
    const msPerMonth = msPerDay * daysPerMonth
    const msPerYear = msPerDay * daysPerYear
    const elapsed = end === undefined ? Date.now() - start : start - end

    if (elapsed < msPerMinute) {
        const seconds = Math.round(elapsed / msPerSecond)

        return `${seconds} second${seconds === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerHour) {
        const minutes = Math.round(elapsed / msPerMinute)

        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerDay) {
        const hours = Math.round(elapsed / msPerHour)

        return `${hours} hour${hours === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerMonth) {
        const days = Math.round(elapsed / msPerDay)

        return `about ${days} day${days === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerYear) {
        const months = Math.round(elapsed / msPerMonth)

        return `about ${months} month${months === 1 ? "" : "s"} ago`
    }

    const years = Math.round(elapsed / msPerYear)

    return `about ${years} year${years === 1 ? "" : "s"} ago`
}
