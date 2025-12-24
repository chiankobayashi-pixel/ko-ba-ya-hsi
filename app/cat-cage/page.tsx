export default function CatCagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl"></div>
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-800">
                <svg
                  viewBox="0 0 170 93"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="166"
                    height="89"
                    rx="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-600"
                  />
                  
                  <line
                    x1="2"
                    y1="32"
                    x2="168"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-600"
                  />
                  <line
                    x1="2"
                    y1="62"
                    x2="168"
                    y2="62"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-600"
                  />

                  <rect
                    x="10"
                    y="4"
                    width="25"
                    height="26"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-blue-500"
                  />
                  <circle cx="32" cy="17" r="1.5" fill="currentColor" className="text-blue-500" />
                  
                  <rect
                    x="135"
                    y="34"
                    width="25"
                    height="26"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-purple-500"
                  />
                  <circle cx="157" cy="47" r="1.5" fill="currentColor" className="text-purple-500" />

                  <circle cx="75" cy="17" r="3" fill="currentColor" className="text-zinc-400" />
                  <circle cx="85" cy="17" r="2" fill="currentColor" className="text-zinc-300" />
                  <circle cx="95" cy="17" r="2.5" fill="currentColor" className="text-zinc-400" />

                  <rect x="70" y="35" width="8" height="8" rx="1" fill="currentColor" className="text-amber-400 opacity-70" />
                  <rect x="80" y="37" width="6" height="6" rx="1" fill="currentColor" className="text-amber-300 opacity-60" />

                  <path
                    d="M 40 70 Q 50 68 60 70 T 80 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-zinc-400"
                  />

                  <text x="85" y="8" fontSize="4" fill="currentColor" className="text-zinc-500 dark:text-zinc-400">
                    亚克力材质 (Acrylic)
                  </text>
                  <text x="5" y="88" fontSize="3.5" fill="currentColor" className="text-zinc-400">
                    第1层 (Layer 1)
                  </text>
                  <text x="5" y="58" fontSize="3.5" fill="currentColor" className="text-zinc-400">
                    第2层 (Layer 2)
                  </text>
                  <text x="5" y="28" fontSize="3.5" fill="currentColor" className="text-zinc-400">
                    第3层 (Layer 3)
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                三层亚克力猫笼
              </h1>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                3-Tier Acrylic Cat Cage
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950/30">
                <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  产品特点 (Features)
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700 dark:text-zinc-300">
                      <strong>3层设计</strong> - 上下连通的多层空间，让猫咪自由活动
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700 dark:text-zinc-300">
                      <strong>双门设计</strong> - 两个大门方便随时取出猫咪互动抚摸
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700 dark:text-zinc-300">
                      <strong>亚克力材质</strong> - 透明清晰，易于观察和清洁
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700 dark:text-zinc-300">
                      <strong>宽敞空间</strong> - 足够的活动空间保证猫咪舒适
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-950/30">
                <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  规格尺寸 (Specifications)
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-md bg-white p-4 shadow-sm dark:bg-zinc-800">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">长度 (Length)</div>
                    <div className="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">170cm</div>
                  </div>
                  <div className="rounded-md bg-white p-4 shadow-sm dark:bg-zinc-800">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">宽度 (Width)</div>
                    <div className="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">38cm</div>
                  </div>
                  <div className="rounded-md bg-white p-4 shadow-sm dark:bg-zinc-800">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">高度 (Height)</div>
                    <div className="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">93cm</div>
                  </div>
                </div>
                <div className="mt-4 rounded-md bg-white p-4 shadow-sm dark:bg-zinc-800">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">材质 (Material)</div>
                  <div className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    高品质亚克力 (Premium Acrylic)
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-6 dark:bg-amber-950/30">
                <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  产品优势 (Advantages)
                </h2>
                <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <p>✨ <strong>上下连通设计：</strong>三层之间有通道，猫咪可以自由上下活动，增加运动量</p>
                  <p>🚪 <strong>便捷双门：</strong>两个大门设计，方便您随时打开与猫咪互动，增进感情</p>
                  <p>👁️ <strong>透明视野：</strong>亚克力透明材质，可以随时观察猫咪状态</p>
                  <p>🧼 <strong>易于清洁：</strong>光滑表面，清洁维护简单方便</p>
                  <p>🏠 <strong>宽敞舒适：</strong>170cm长度提供充足的活动空间</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            产品详细信息 (Detailed Information)
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">三层结构</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                每层约31cm高度，层间设有通道连接，猫咪可以轻松在不同楼层间移动，满足其天性中的攀爬需求。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">双门系统</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                配备两个大尺寸门，位置设计合理，方便从不同位置接触猫咪，日常互动和清洁都很便利。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">优质材料</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                采用高品质亚克力板材，坚固耐用，抗刮擦，透光性好，让整个空间明亮通透。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">宽敞空间</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                170cm的长度提供了充足的活动空间，适合1-3只猫咪同时使用，让它们有足够的个人空间。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">人性化设计</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                专为增进人猫互动设计，大门开口设计让您可以轻松地把猫咪抱出来抚摸玩耍。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">易于维护</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                亚克力材质表面光滑，不易积聚污垢，清洁时只需用湿布擦拭即可，维护简单省心。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">适用场景 (Ideal For)</h2>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">🏠</div>
                <h3 className="mb-2 text-xl font-semibold">家庭使用</h3>
                <p className="text-sm text-white/90">适合家庭饲养多只猫咪，提供独立舒适的生活空间</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">🏥</div>
                <h3 className="mb-2 text-xl font-semibold">宠物医院</h3>
                <p className="text-sm text-white/90">透明设计便于观察，适合医疗观察和术后恢复</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">🏪</div>
                <h3 className="mb-2 text-xl font-semibold">宠物店</h3>
                <p className="text-sm text-white/90">展示效果好，便于顾客观看和互动</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
