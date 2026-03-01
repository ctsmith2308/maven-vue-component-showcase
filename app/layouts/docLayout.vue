<template>
  <div>
    <DocumentHeader/>

    <main class="flex flex-row md:px-10 bg-page lg:px-20">
      <aside class="hidden md:block sticky top-15 h-screen w-64 shrink-0 overflow-y-auto">
        <DocumentSidebar/>
      </aside>
          
      <div class="flex w-screen">
        <slot />
      </div>
    </main>
    
    <DocumentFooter/>
  </div>
</template>