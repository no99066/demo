import { test, expect } from "@playwright/test"
import { IphonePage } from "../page-object/IphonePage"

test.describe("Product Filtering", () => {
    let iphonePage: IphonePage

    test.beforeEach(async({ page }) => {
        iphonePage = new IphonePage(page)
        await iphonePage.visit()
    })

    test('Check model', async ({ page }) => {
        await iphonePage.selectIphoneModel("iPhone 13")
    })

    test('Possitive filtration by price', async () => {
        await iphonePage.setMinPrice('1')
        await iphonePage.setMaxPrice('35000')
        await iphonePage.maxPriceInput.press("Enter")
        await iphonePage.okButton.click()
    })

    // test('Year Filter', async ({ page }) => {
    //     await iphonePage.yearFilterCheckbox("2023")
    //     await iphonePage.okButton.click()
    //     await iphonePage.productInList.nth(0).locator('a').nth(0).click()
    //     await iphonePage.tabLineOpen("Характеристики")
    //     const yearElement = page.locator('//div[@class="line_chars"] [0] //p').nth(0).locator('//p@[class="p2"]');

    //     // Проверяем, содержит ли найденный элемент текст, соответствующий ожидаемому году
    //     await expect(yearElement).toHaveText("2023")
    // })

    test('Color Choice', async ({ page }) => {
        await iphonePage.ColorChoose("Blue")
    })



    // const expectedHeaders = [
    //     'Смартфони iPhone',
    //     'Вартість, грн',
    //     'Рік релізу',
    //     'Колір',
    //     'Рік випуску',
    //     'SIM-карта'
    // ]

    // test.only('Check left filter names', async ({ page }) => {
    //     const leftSectionText = await iphonePage.leftSection.textContent()
    //     for (const header of expectedHeaders) {
    //     await expect(leftSectionText).toContain(header)
    // }
    // })
})