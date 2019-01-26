all: compile

PACKAGE_MANAGER=yarn
DIST=dist
SOURCE=src

dev: $(SOURCE)/*	## Enter in developer mode
	$(PACKAGE_MANAGER) run dev
build: src/* ## Compile the Website
	$(PACKAGE_MANAGER) run build

clean: $(DIST)/*  ## Clean the folder dist
	rm -rf $(DIST)/*

help: ## Show this Message
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

test:
	@echo $*.json
