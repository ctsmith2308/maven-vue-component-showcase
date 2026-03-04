<template>
  <div>
    <DocsHeader/>

    <main class="flex flex-row md:px-10 bg-page lg:px-20">
      <aside class="hidden md:block sticky top-15 h-screen w-64 shrink-0 overflow-y-auto">
        <DocsSidebar/>
      </aside>
          
      <div class="flex w-screen">
        <slot />
      </div>
    </main>
    
    <DocsFooter/>
  </div>
</template>