import { Locator, Page } from '@playwright/test'

export class IphonePage {
    readonly page: Page
    readonly iPhoneModelLink : Locator
    readonly priceFilterSection: Locator
    readonly minPriceInput: Locator
    readonly maxPriceInput: Locator
    readonly okButton: Locator
    readonly yearFilter: Locator
    readonly productInList: Locator
    readonly tabLine: Locator
    readonly ColorType: Locator



  constructor(page: Page) {
    this.page = page;
    this.iPhoneModelLink = page.locator('div.item_sections_left a');
    this.priceFilterSection = page.locator("//div[contains(@class, 'bx-filter-parameters-box') and contains(@class, 'bx-active') and .//span[contains(text(), 'Вартість')]]");
    this.minPriceInput = page.locator("input.min-price");
    this.maxPriceInput = page.locator("input.max-price");
    this.okButton = page.locator('a:has-text("Показати")');
    this.yearFilter = page.locator('//div[@class="checkbox"]//span[@class = "bx-filter-param-text"]')
    this.productInList = page.locator('//div[@class="in_section_products"]')
    this.tabLine = page.locator('//div[@class="line_tabs_choice"]/div')
    this.ColorType = page.locator('//span[@class="bx-filter-param-text"]')

  }

  async visit() {
    await this.page.goto('https://www.istore.ua/ua/iphone/')
  }

  async selectIphoneModel(modelName: string) {
    //Locate the element with the text and then click on it
    await this.page.locator('div.item_sections_left a', { hasText: modelName }).click();
}

  async setMinPrice(modelName: string){
    await this.minPriceInput.fill(modelName)
  }

  async setMaxPrice(modelName: string){
    await this.maxPriceInput.fill(modelName)
  }

  async yearFilterCheckbox (year: string) {
    await this.yearFilter.filter({ hasText: year }).click()
  }

  async tabLineOpen(text: string){
    await this.tabLine.filter({ hasText: text }).click()

  }

  async ColorChoose(text: string) {
    await this.page.locator(`//a[normalize-space()='${text}']`).click();
}


  
   




};